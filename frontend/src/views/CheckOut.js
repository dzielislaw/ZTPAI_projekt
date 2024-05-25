import React, {useEffect, useState} from 'react';
import '../css/Check.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const CheckOut = () => {
    const [rentals, setRentals] = useState([]);
    const [toolInstances, setToolInstances] = useState({});
    const [clientes, setClientes] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const getRentals = async () => {
            try {
                const jwtToken = localStorage.getItem('jwt-token');
                if (!jwtToken) {
                    navigate('/login');
                    return;
                }
                const config = {
                    headers: {
                        'Authorization': `Bearer ${jwtToken}`,
                        'Accept': 'application/ld+json'
                    }
                };
                const response = await axios.get('http://127.0.0.1:80/api/rentals', config);
                const data = response.data['hydra:member'];
                setRentals(data.filter((item) => item.hasClientCollected === false));
                const toolInstancePromises = data.map(async (rental) => {
                    const url = `http://127.0.0.1:80${rental.toolInstance}`;
                    const toolInstanceResponse = await axios.get(url, config);
                    const toolInstanceData = toolInstanceResponse.data;
                    const toolUrl = `http://127.0.0.1:80${toolInstanceData.tool}`;
                    const toolResponse = await axios.get(toolUrl, config);
                    const toolData = toolResponse.data;
                    return [rental.id, {
                        ToolId: toolData['@id'].split('/').pop(),
                        ToolName: toolData.name
                    }];
                });
                const toolInstanceData = await Promise.all(toolInstancePromises);
                setToolInstances(Object.fromEntries(toolInstanceData));

                const clientInstancePromises = data.map(async (rental) => {
                    const clientUrl = `http://127.0.0.1:80${rental.client}`;
                    const clientResponse = await axios.get(clientUrl, config);
                    const clientData = clientResponse.data;
                    return [rental.id, {
                        clientId: clientData['@id'].split('/').pop(),
                        firstName: clientData.firstName,
                        clientSurname: clientData.lastName
                    }];
                });
                const ClientsData = await Promise.all(clientInstancePromises);
                setClientes(Object.fromEntries(ClientsData));
            } catch (e) {
                // console.log(e);
            }
        }
        getRentals();
    }, [navigate]);

    const RegisterCheckOut = async (rental) => {
        try {
            const jwtToken = localStorage.getItem('jwt-token');
            const config = {
                headers: {
                    'Authorization': `Bearer ${jwtToken}`,
                    'Content-Type': 'application/merge-patch+json',
                    'accept': 'application/ld+json',
                }
            };
            rental.hasClientCollected = true;
            //rental.returnToDate = new Date().toISOString()
            const payload = JSON.stringify(rental);
            console.log(payload)
            const response = await axios.patch(`http://127.0.0.1:80/api/rentals/${rental.id}`, payload, config);
            console.log(response);
        } catch (e) {
            //  console.log(e);
        }
    }

    const LogOut = () => {
        if (localStorage.getItem('jwt-token') !== null) {
            localStorage.removeItem('jwt-token');
        }
        navigate('/login');
    };
    return (
        <div id="container">
            <div id="banner">
                <div id="header">
                    <h1>Bud-apka</h1>
                </div>
                <div id="buttonArea">
                    <form className="banner_form" action="dashboard">
                        <button className="userButtonCheck">Moje konto</button>
                    </form>
                    <form className="banner_form" action="/logout" method="GET">
                        <button className="userButtonUserAccount">Wyloguj</button>
                    </form>
                </div>
            </div>
            <div id="left">
                {rentals.length > 0 ? (
                    rentals.map((rental, index) => (
                        <div key={index}>
                            Wypożyczenie nr: {rental.id} narzędzie: {toolInstances[rental.id]?.ToolName} klient: {clientes[rental.id]?.firstName} {clientes[rental.id]?.clientSurname}
                            <button id={rental.id} onClick={() => RegisterCheckOut(rental)} className="issueButton">Wydaj</button>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            <div id="footer">
                <p>Contact details admin@sampleRentCompany.test.local &copy 2023</p>
            </div>
        </div>
    );
};

export default CheckOut;
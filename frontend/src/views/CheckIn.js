import React, {useEffect, useState} from 'react';
import '../css/Check.css';
import axios from "axios";
const CheckIn = () => {
    const [rentals, setRentals] = useState([]);
    const [toolInstances, setToolInstances] = useState({});
    const [clientes, setClientes] = useState({});
    if(!localStorage.getItem('jwt-token')){
        window.location.href = '/login';
    }
    useEffect(() => {
        const getRentals = async () => {
            try {
                const jwtToken = localStorage.getItem('jwt-token');
                const config = {
                    headers: {
                        'Authorization': `Bearer ${jwtToken}`,
                        'Accept': 'application/ld+json'
                    }
                };
                const response = await axios.get('http://127.0.0.1:80/api/rentals', config);
                console.log(response);
                const data = response.data['hydra:member'];
                setRentals(data);
                const toolInstancePromises = data.map(async (rental) => {
                    const url = `http://127.0.0.1:80${rental.toolInstance}`
                    const toolInstanceResponse = await axios.get(url, config);
                    const toolInstanceData = toolInstanceResponse.data;
                    const toolUrl = `http://127.0.0.1:80${toolInstanceData.tool}`;
                    console.log(toolUrl)
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
                    const clientUrl = `http://127.0.0.1:80${rental.client}`
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
                console.log(e);
            }
        }
        getRentals();
    }, []);
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
                    <form className="banner_form" action="/frontend/src/components/logout" method="GET">
                        <button className="userButtonCheck">Wyloguj</button>
                    </form>
                </div>
            </div>
            <div id="left">
                {rentals.length > 0 ? (
                    rentals.map((rental, index) => (
                        <div key={index}>
                            <p>Wypożyczenie nr: {rental.id} narzędzie: {toolInstances[rental.id]?.ToolName} klient: {clientes[rental.id]?.firstName} {clientes[rental.id]?.clientSurname}</p>
                            <button className="issueButton">Wydaj</button>
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

export default CheckIn;
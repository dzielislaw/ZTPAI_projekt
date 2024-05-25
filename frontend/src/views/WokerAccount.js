import React from 'react';
import mis from '../img/mis.jpg';
import '../css/WorkerAccount.css';
import {useNavigate} from "react-router-dom";
const WorkerAccount = () => {
    if(!localStorage.getItem('jwt-token')){
        window.location.href = '/login';
    }
    const LogOut = () => {
        const navigate = useNavigate();
        if(localStorage.getItem('jwt-token') !== null) {
            localStorage.removeItem('jwt-token');
        }
        navigate('/login');
    };
    return (
        <div id="containerWorkerAccount">
            <div id="bannerWorkerAccount">
                <div id="headerWorkerAccount">
                    <h1>Dzień dobry Jan!</h1>
                </div>
                <div id="buttonAreaWorkerAccount">
                    <form className="banner_formWorkerAccount" action="/workerAccount">
                        <button className="userButtonWorkerAccount">Moje konto</button>
                    </form>
                    <form className= "banner_formWorkerAccount" action="/logout" method="GET">
                        <button className="userButtonWorkerAccount">Wyloguj</button>
                    </form>
                </div>
        </div>
        <div id="middleWorkerAccount">
            <form className="workerForm" action="/checkIn">
                <input type = "submit" value="Zwrót sprzętu" />
            </form>
            <form className="workerForm" action="/checkOut">
                <input type = "submit" value="Wydawanie sprzętu" />
            </form>
            <form className="workerForm" action="/addTool">
                <input type="submit" value="Dodawanie sprzętu" />
            </form>
        </div>
        <div id="footerWorkerAccount">
            <p>Contact details admin@sampleRentCompany.test.local &copy 2024</p>
        </div>
    </div>
    );
};

export default WorkerAccount;
import React from 'react';
import logo from '../img/logo.png';
import '../css/UserAccount.css';
const UserAccount = () => {
    return (
        <div id="container">
            <div id="banner">
                <div id="header">
                    <h1>Sprzęt-apka</h1>
                </div>
                <div id="buttonArea">
                    <form className="banner_form">
                        <button className="userButton">Moje konto</button>
                    </form>
                    <form className="banner_form" action="logout" method="GET">
                        <button className="userButton">Wyloguj</button>
                    </form>
                </div>
            </div>
            <div id="left">
                <h1>Sprzęt-apka</h1>
                <img src={logo} alt="logo"/>
            </div>
            <div id="right">
                <div id="searchBar">
                    <div id="searchImg">
                        <img src="public/img/magnyfing_glass.png"/>
                    </div>
                    <div id="searchOpt">
                        <form id="search" method="GET" action="equipments">
                            <label>
                                <select name="toolSelect" id="toolSelect" required>

                                </select>
                            </label>
                            <input type="submit" value="Szukaj"/>
                        </form>
                    </div>
                </div>
            </div>
            <div id="footer">
                <p>Contact details admin@sampleRentCompany.test.local &copy 2023</p>
            </div>
        </div>
    )
};

export default UserAccount;
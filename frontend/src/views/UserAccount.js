import React from 'react';
import logo from '../img/logo.png';
import magnyfing_glass from '../img/magnyfing_glass.png';
import '../css/UserAccount.css';
const UserAccount = () => {
    return (
        <div id="containerUserAccount">
            <div id="bannerUserAccount">
                <div id="UserAccount">
                    <h1>Sprzęt-apka</h1>
                </div>
                <div id="buttonAreaUserAccount">
                    <form className="banner_formUserAccount">
                        <button className="userButtonUserAccount">Moje konto</button>
                    </form>
                    <form className="banner_formUserAccount" action="logout" method="GET">
                        <button className="userButtonUserAccount">Wyloguj</button>
                    </form>
                </div>
            </div>
            <div id="leftUserAccount">
                <h1>Sprzęt-apka</h1>
                <img src={logo} alt="logo"/>
            </div>
            <div id="rightUserAccount">
                <div id="searchBarUserAccount">
                    <div id="searchImgUserAccount">
                        <img src={magnyfing_glass}/>
                    </div>
                    <div id="searchOptUserAccount">
                        <form id="searchUserAccount" method="GET" action="equipments">
                            <label>
                                <select name="toolSelect" id="toolSelectUserAccount" required>

                                </select>
                            </label>
                            <input type="submit" value="Szukaj"/>
                        </form>
                    </div>
                </div>
            </div>
            <div id="footerUserAccount">
                <p>Contact details admin@sampleRentCompany.test.local &copy 2023</p>
            </div>
        </div>
    )
};

export default UserAccount;
import React from 'react';
import '../css/LogIn.css';
import logo from '../img/logo.png';
const LogIn = () => {
    return (
        <div id="containerLogIn">
            <div id="bannerLogIn">
                <h1>BUD-apka</h1>
                <img src={logo} alt="logo"/>
            </div>
            <div id="leftLogIn">
                <h1>BUD-apka</h1>
                <div id="logoLogIn">
                    <img src={logo} alt="logo"/>
                </div>
            </div>
            <div id="rightLogIn" className="flex-column-center-center">
                <form action="/LogIn" method="POST" className="flex-column-center-center">
                    <div id="messages">
                        // TODO
                    </div>
                    <input className="userButton" type="email" name="email" placeholder="email"/> <br/>
                    <input className="userButton" type="password" name="password" placeholder="hasło"/> <br/>
                    <input id="loginButton" type="submit" value="Zaloguj"/>
                </form>
                <a href="./register">
                    <button id="registerButton">Nie masz konta? Zarejestruj się</button>
                </a>
            </div>
            <div id="footerLogIn">
                <p>Contact details admin@sampleRentCompany.test.local &copy 2024</p>
            </div>
        </div>
    );
};

export default LogIn;
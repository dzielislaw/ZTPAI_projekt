import React from 'react';
import logo from '../img/logo.png';
import '../css/SignUp.css';
const Page404 = () => {
    return (
        <div id="container_pcSignUp">
            <div id="bannerSignUp">
                <h1>BUD-apka</h1>
            </div>
            <div id="logoSignUp">
                <img src={logo} alt="Logo" />
            </div>
            <div id = "main_contentSignUp">
                <form action="./signUp" method="POST">
                    <input type="text" name="name" id="name" placeholder="imię" />
                    <input type="text" name="surname" id="surname" placeholder="nazwisko" />
                    <input type="text" name="pesel" id="pesel" placeholder="pesel" />
                    <input type="text" name="email" id="email" placeholder="email" />
                    <input type="password" name="password" id="password" placeholder="hasło" />
                    <input type="password" name="confirmedPassword" id="password" placeholder="powtórz hasło" />
                    <label>
                        <input type="checkbox" id="agreementCheckbox" name="agreementCheckbox" value="Terms accepted"/>
                        Akceptuję warunki korzystania z serwisu
                    </label>
                    <input className="userInput" id="registerButton" type="submit" value="Załóż konto" />
                </form>
            </div>
            <div id="footerSignUp">
                <p>Contact details admin@sampleRentCompany.test.local &copy 2023</p>
            </div>
        </div>
    )
};

export default Page404;
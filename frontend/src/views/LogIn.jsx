import React, { useState } from 'react';
import '../css/LogIn.css';
import logo from '../img/logo.png';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const { register, handleSubmit } = useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://127.0.0.1:80/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                }),
            });
            const responseData = await response.json();
            if (response.ok) {
                // Handle successful login
                console.log('Login successful');
                localStorage.setItem('jwt-token', responseData['token']);
                navigate('/myAccount');
            } else {
                // Handle login error
                console.error('Login failed:', response.status);
                setErrorMessage('Dane logowania są niepoprawne');
            }
        } catch (e) {
            console.error('Error:', e);
        }
    };

    return (
        <div id="containerLogIn">
            <div id="bannerLogIn">
                <h1>BUD-apka</h1>
                <img src={logo} alt="logo" />
            </div>
            <div id="leftLogIn">
                <h1>BUD-apka</h1>
                <div id="logoLogIn">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div id="rightLogIn" className="flex-column-center-center">
                <form onSubmit={handleSubmit(onSubmit)} className="flex-column-center-center">
                    <div id="messages">
                        {errorMessage}
                    </div>
                    <input className="userButton" type="email" name="email" placeholder="email" {...register('email')} /> <br />
                    <input className="userButton" type="password" name="password" placeholder="hasło" {...register('password')} /> <br />
                    <input id="loginButton" type="submit" value="Zaloguj" />
                </form>
                <a href="/resetPassword">
                    <button type="button">Resetuj hasło</button>
                </a>
                <a href="./signUp">
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

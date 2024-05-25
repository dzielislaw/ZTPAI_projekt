import React, { useState, useEffect } from 'react';
import logo from '../img/logo.png';
import magnyfing_glass from '../img/magnyfing_glass.png';
import LogOut from "../components/LogOut";
import '../css/UserAccount.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const UserAccount = () => {
    if(!localStorage.getItem('jwt-token')){
        window.location.href = '/login';
    }
    const [categories, setCategories] = useState([]);

    const LogOut = () => {
        const navigate = useNavigate();
        if(localStorage.getItem('jwt-token') !== null) {
            localStorage.removeItem('jwt-token');
        }
        navigate('/login');
    };

    useEffect(() => {
        const getCategories = async () => {
            try {
                const jwtToken = localStorage.getItem('jwt-token');
                const config = {
                    headers: {
                        'Authorization': `Bearer ${jwtToken}`,
                        'Accept': 'application/ld+json'
                    }
                };
                const response = await axios.get('http://127.0.0.1:80/api/categories'/*, config*/);
                console.log(response);
                const categories = response.data['hydra:member'];
                categories.sort((a, b) => a.name.localeCompare(b.name));
                setCategories(categories);
            } catch (e) {
                console.log(e);
            }
        }
        getCategories();
    }, []);

    return (
        <div id="containerUserAccount">
            <div id="bannerUserAccount">
                <div id="UserAccount">
                    <h1>Bud-apka</h1>
                </div>
                <div id="buttonAreaUserAccount">
                    <form className="banner_formUserAccount">
                        <button className="userButtonUserAccount">Moje konto</button>
                    </form>
                    <form className="banner_formUserAccount" action="/logout" method="GET">
                        <button /*onClick={LogOut}*/ className="userButtonUserAccount">Wyloguj</button>
                    </form>
                </div>
            </div>
            <div id="leftUserAccount">
                <h1>Bud-apka</h1>
                <img src={logo} alt="logo" />
            </div>
            <div id="rightUserAccount">
                <div id="searchBarUserAccount">
                    <div id="searchImgUserAccount">
                        <img src={magnyfing_glass} />
                    </div>
                    <div id="searchOptUserAccount">
                        <form id="searchUserAccount" method="GET" action="equipments">
                            <label>
                                <select name="toolSelect" id="toolSelectUserAccount" required>
                                    {categories.map((item, index) => (
                                        <option key={index}>{item.name}</option>
                                    ))}
                                </select>
                            </label>
                            <input type="submit" value="Szukaj" />
                        </form>
                    </div>
                </div>
            </div>
            <div id="footerUserAccount">
                <p>Contact details admin@sampleRentCompany.test.local &copy 2024</p>
            </div>
        </div>
    )
};

export default UserAccount;
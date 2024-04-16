import React from 'react';
import logo from '../img/logo.png'
import '../css/AddTool.css';
const AddTool = () => {
    return (
        <div id="container">
            <div id="banner">
                <div id="header">
                    <h1>Sprzęt-apka</h1>
                </div>
                <div id="buttonArea">
                    <form className="banner_form" action="/dashboard">
                        <button className="userButtonAddTool">Moje konto</button>
                    </form>
                    <form className="banner_form" action="logout" method="GET">
                        <button className="userButtonAddTool">Wyloguj</button>
                    </form>
                </div>
            </div>
            <div id="left">
                <h1>Sprzęt-apka</h1>
                <img src={logo} alt="logo"/>
            </div>
            <div id="right">
                <form id="addToolForm" method="POST" encType="multipart/form-data" action="">
                    <input type="text" name="name" className="userInput" placeholder="Nazwa" required/>
                    <input type="number" className="userInput" step={0.01} name="price" placeholder="0.00" required />
                    <label> Kategoria
                        <select name="category" required/>

                    </label>
                    <br /> <label>Producent
                        <select name="producer" required>

                        </select>
                    </label>
                    <br /> <input type="file" name="photo" className="" required />
                    <label>
                        <br /> <input id="checkboxAddTool" type="checkbox" name="shouldAddExemplary" checked />
                        Dodaj egzemplarz
                    </label>
                    <br /> <input type="submit" className="userButton" id="submitButton" value="Dodaj" />
                </form>
            </div>
            <div id="footer">
                <p>Contact details admin@sampleRentCompany.test.local &copy 2023</p>
            </div>
        </div>
);
};

export default AddTool;
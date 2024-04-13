import React from 'react';

const CheckOut = () => {
    return (
        <div id="container">
            <div id="banner">
                <div id="header">
                    <h1>Sprzęt-apka</h1>
                </div>
                <div id="buttonArea">
                    <form className="banner_form" action="dashboard">
                        <button className="userButton">Moje konto</button>
                    </form>
                    <form className="banner_form" action="/logout" method="GET">
                        <button className="userButton">Wyloguj</button>
                    </form>
                </div>
            </div>
            <div id="left">
               // TODO
            </div>
            <div id="footer">
                <p>Contact details admin@sampleRentCompany.test.local &copy 2023</p>
            </div>
        </div>
    );
};

export default CheckOut;
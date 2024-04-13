import React from 'react';
import mis from '../img/mis.jpg';
import '../css/Page404.css';
const Page404 = () => {
    return (
        <div id="container404">
            <div id="banner404">
                <h1 id="header404">Nie mamy takiego url-a i co Pan nam zrobi?</h1>
            </div>
            <div id="main_content404">
                <img src={mis} alt="Obrazka też nie mamy ;)" />
            </div>
            <div id="footer404">
                <p>Contact details admin@sampleRentCompany.test.local &copy; 2024</p>
            </div>
        </div>
    );
};

export default Page404;
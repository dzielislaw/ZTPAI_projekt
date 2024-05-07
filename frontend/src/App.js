import favicon from './img/favicon.ico';
import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Page404 from "./views/Page404";
import Tools from "./views/Tools";
import CheckIn from "./views/CheckIn";
import CheckOut from "./views/CheckOut";
import UserAccount from "./views/UserAccount";
import LogIn from "./views/LogIn";
import SignUp from "./views/SignUp";
import WorkerAccount from "./views/WokerAccount";
import AddTool from "./views/AddTool";
import LogOut from "./components/LogOut";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="signUp" element={<SignUp />} />
                <Route path="checkIn" element={<CheckIn />} />
                <Route path="checkOut" element={<CheckOut />} />
                <Route path="myAccount" element={<UserAccount />} />
                <Route path="workerAccount" element={<WorkerAccount />} />
                <Route path="logIn" element={<LogIn />} />
                <Route path="addTool" element={<AddTool />} />
                <Route path="logOut" element={<LogOut />} />
                <Route path="/" element={<LogIn />} />
                {/*<Route path="logOut" element={<LogOut />} />*/}
                <Route path="tool/:id" element={<Tools />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

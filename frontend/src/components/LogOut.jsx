import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/login';
    };
    handleLogout();
};

export default LogOut;
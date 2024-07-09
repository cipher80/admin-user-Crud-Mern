import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Link to="/admin/register">Admin Registration</Link>
            <Link to="/admin/login">Login</Link>
        </div>
    );
};

export default Dashboard;

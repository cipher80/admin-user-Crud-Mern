import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Link to="/admin/register"><button>Admin Registration</button></Link>
            <Link to="/admin/login"><button>Admin/User Login</button></Link>
        </div>
    );
}

export default Home;

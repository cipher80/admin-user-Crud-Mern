import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AdminRegister from './pages/AdminRegister';
import AddUser from './pages/AddUser';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin/register" element={<AdminRegister />} />
                <Route path="/addUser" element={<AddUser />} />
            </Routes>
        </Router>
    );
};

export default App;

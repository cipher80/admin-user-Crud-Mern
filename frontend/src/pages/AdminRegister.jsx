import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminRegister = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError(null); // Clear previous errors
            console.log('Sending registration request:', formData);
            
            // Make sure the axios post request matches your backend endpoint
            const response = await axios.post('http://localhost:3000/admin/register', formData);
            console.log('Received response:', response.data);
            
            // Check if response status is successful (adjust as per your backend response structure)
            if (response.status === 200 && response.data.message === 'Admin registered successfully') {
                console.log('Admin registered successfully:', response.data.admin);
                navigate('/addUser'); // Navigate to next page after successful registration
            } else {
                console.error('Registration failed:', response.data.message);
                setError('Registration failed. Please try again.');
            }
        } catch (err) {
            console.error('Error:', err.response ? err.response.data : err.message);
            setError('Error registering admin. Please check your inputs and try again.');
        }
    };

    return (
        <div>
            <h1>Admin Registration</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default AdminRegister;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError(null); // Clear previous errors
            console.log('Sending login request:', formData);
            
            // Make sure the axios post request matches your backend endpoint
            const response = await axios.post('http://localhost:3000/admin/login', formData);
            console.log('Received response:', response.data);
            
            // Check if response status is successful (adjust as per your backend response structure)
            if (response.status === 200 && response.data.message === 'Login successful') {
                console.log('Login successful:', response.data.user);
                // Example: Save token to localStorage for authentication
                localStorage.setItem('token', response.data.token);
                navigate('/dashboard'); // Navigate to dashboard or appropriate route
            } else {
                console.error('Login failed:', response.data.message);
                setError('Login failed. Please check your credentials and try again.');
            }
        } catch (err) {
            console.error('Error:', err.response ? err.response.data : err.message);
            setError('Error logging in. Please try again later.');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;

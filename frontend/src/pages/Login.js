import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/'); 
    };

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h1>Log In</h1>
                <p className="subtitle">Log in to adopt a pet.</p>
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
                    <button type="submit" className="submit-button">
                        Log In
                    </button>
                </form>
                <p className="signup-link">
                    Don't have an account? <a href="/create-account">Create Account</a>
                </p>
            </div>
        </div>
    );
};

export default Login;

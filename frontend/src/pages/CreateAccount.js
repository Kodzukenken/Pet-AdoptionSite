import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateAccount.css';

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        age: '',
        password: '',
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (parseInt(formData.age) < 18) {
            setError('You must be at least 18 years old to create an account.');
            return;
        }
        
        if (parseInt(formData.age) || parseInt(formData.age) <= 0) {
            setError('Please enter a valid age.');
            return;
        }

        setError("");
        alert(`Account created successfully.`);
        navigate('/login');
    };

    return (
        <div className="create-account-wrapper">
            <div className="create-account-card">
                <h1>Create Account</h1>
                <p className="subtitle">Join us and help give every pet a loving home.</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
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
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        min="1"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="submit-button">
                        Create Account
                    </button>
                </form>
                <p className="login-link">
                    Already have an account? <a href="/login">Log in</a>
                </p>
            </div>
        </div>
    );
};

export default CreateAccount;

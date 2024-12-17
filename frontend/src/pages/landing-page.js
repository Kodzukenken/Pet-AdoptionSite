import React, { useState, useEffect } from 'react';
import {
    login,
    register,
    postForgotPassword,
    putResetPassword,
} from "../services";
import { useNavigate } from 'react-router-dom';
import { useUser } from "../context/user-context";
import { HOME, USERDASH } from '../constants/routes';
// import {AdoptionRequests} from '../pages/admin/adoption-requests';
import Swal from "sweetalert2";

export default function Landing() {
    const [mode, setMode] = useState("login"); //mode: regist, login, forgotpass
    const [formData, setFormData] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [age, setAge] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { loginUser } = useUser();
    const navigate = useNavigate();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateEmail = (email) => emailRegex.test(email);

    const validatePassword = () => password && password === confirmPass;

    const handleLogin = async (e) => {
        e.preventDefault();
        if (validateEmail(email.trim())) {
            try {
                setIsLoading(true);
                const response = await login({ email, password });
                loginUser(response.user);
                
                if (response.user.role === "admin") {
                    navigate("/admin/adoption-requests");
                } else {
                    navigate(HOME);
                }
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setIsLoading(false);
            }
        } else {
            setErrorMessage("Invalid email format");
        }
    };

    const sanitizeInput = (input) => {
      return input.trim().replace(/[^a-zA-Z\s]/g, "");
    };    

    const sanitizeInputParagraph = (input) => {
      return input.trim().replace(/[^a-zA-Z0-9.,&! "'?\n-]/g, "");
    };

    const validateAge = (age) => age > 1 && age < 110;

    const handleRegister = async (e) => {
        e.preventDefault();
        formData = {...formData,
            name: sanitizeInput(name),
            age: validateAge(age),
            email: validateEmail(email),
            address: sanitizeInputParagraph(address),
            password: password
        };
        setFormData(formData); 

        if (!validateEmail(email.trim())) {
            setErrorMessage("Invalid email format");
            return;
        }
        if (!validatePassword) {
            setErrorMessage("Passwords do not match");
            return;
        }
        if(!sanitizeInput(name)){
            setErrorMessage("Name can't be empty");
            return;
        }
        if(!validateAge(age)){
            setErrorMessage("Please enter a valid age");
            return;
        }
        if(!sanitizeInputParagraph(address)){
            setErrorMessage("Please enter your address");
            return;
        }

        try {
            setIsLoading(true);
            await register(formData);
            const response = await register(formData); //API
            if(response.status === 440){
                setErrorMessage("Session expired");
            }
            Swal.fire({
                title: "Registration Successful!",
                text: "Account has been created!",
                icon: "success",
                confirmButtonText: "Continue",
            });
            navigate(HOME);
            setIsLoading(false);
        } catch (error) {
            setErrorMessage(error.response?.formData?.message || "Registration failed");
        } finally {
            setIsLoading(false);
            // setErrorMessage(error.message);
        }
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        if (!validateEmail(email.trim())) {
            setErrorMessage("Invalid email format");
            return;
        }
        try {
            setIsLoading(true);
            const response = await postForgotPassword({ email });
            if (response.status === 201) {
                Swal.fire({
                    title: "Email Confirmed!",
                    text: "Please enter your new password.",
                    icon: "success",
                    confirmButtonText: "Proceed",
                });
                setMode("resetPassword"); // Go to reset password mode
                setErrorMessage("");
            } else {
                setErrorMessage("Email not valid.");
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };
    
  
    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (validatePassword()) {
            try {
                setIsLoading(true);
                const response = await putResetPassword({ email, password });
                if (response.status === 200) {
                    Swal.fire({
                        title: "Password Reset Successful!",
                        icon: "success",
                        confirmButtonText: "Login Now",
                    });
                    setMode("login"); // Back to login mode
                } else {
                    setErrorMessage("Failed to reset password.");
                }
            } catch (error) {
                setErrorMessage(error.response?.data?.message || "Failed to reset password.");
            } finally {
                setIsLoading(false);
            }
        } else {
            setErrorMessage("Passwords do not match or are invalid.");
        }
    };
    

const renderForm = () => {
    switch (mode) {
        case "login":
            return (
                <form onSubmit={handleLogin}>
                <div className="login-wrapper">
                    <h1>Login</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {errorMessage && <p className="error">{errorMessage}</p>}
                    <button type="submit" className="submit-button" disabled={isLoading}>{isLoading ? "Logging in..." : "Login"}</button>
                    <p onClick={() => setMode("forgotPassword")}>Forgot Password?</p>
                    <p onClick={() => setMode("register")} className="signup-link">Don't have an account? Register</p>
                </div>
                </form>
            );
        case "register":
            return (
            <div className="create-account-wrapper">
                <div className="create-account-card">
                
                    <h1>Create Account</h1>
                    <p className='subtitle'> Join us and help give every pet a loving home.</p>
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                        min="1"
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)}
                        required
                    />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit" className='submit-button' disabled={isLoading}>{isLoading ? "Registering..." : "Register"}</button>
                    <p onClick={() => setMode("login")} className='login-link'>Already have an account? Login</p>
                </form>
                </div>
            </div>
            );
        case "forgotPassword":
            return (
                <form onSubmit={handleForgotPassword}>
                    <h2>Forgot Password</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {errorMessage && <p className="error">{errorMessage}</p>}
                    <button type="submit" disabled={isLoading}>{isLoading ? "Sending..." : "Send Reset Email"}</button>
                    <p onClick={() => setMode("login")}>Back to Login</p>
                </form>
            );
        case "resetPassword":
            return (
                <form onSubmit={handleResetPassword}>
                    <h2>Reset Password</h2>
                    <input
                        type="password"
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm New Password"
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)}
                        required
                    />
                    {errorMessage && <p className="error">{errorMessage}</p>}
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? "Resetting..." : "Reset Password"}
                    </button>
                </form>
            );
        default:
            return null;
    }
};

    return (
        <div className="landing-container">
            {renderForm()}
        </div>
    );
}

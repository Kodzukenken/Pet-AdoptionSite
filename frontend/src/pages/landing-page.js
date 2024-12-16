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
import AdoptionRequests from '../pages/admin/adoption-requests';
import Swal from "sweetalert2";

export default function Landing() {
    const { loginUser } = useUser();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Page Mode
    const [mode, setMode] = useState("login"); // Modes: 'login', 'register', 'forgotPassword'

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

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!validateEmail(email.trim())) {
            setErrorMessage("Invalid email format");
            return;
        }
        if (!validatePassword()) {
            setErrorMessage("Passwords do not match");
            return;
        }
        try {
            setIsLoading(true);
            await register({ email, password });
            Swal.fire({
                title: "Registration Successful!",
                icon: "success",
                confirmButtonText: "Login Now",
            });
            setMode("login"); // Switch to login mode
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "Registration failed");
        } finally {
            setIsLoading(false);
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
          const response = await postForgotPassword({ email }); //check if email exist
          if (response.status === 200) {
              Swal.fire({
                  title: "Valid email!",
                  text: "Please proceed to reset your password.",
                  icon: "success",
                  confirmButtonText: "OK",
              });
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
        if (!validatePassword()) {
            setErrorMessage("Passwords do not match");
            return;
        }
        try {
            setIsLoading(true);
            await putResetPassword({ email, password });
            Swal.fire({
                title: "Password Reset Successful!",
                icon: "success",
                confirmButtonText: "Login Now",
            });
            setMode("login");
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "Failed to reset password");
        } finally {
            setIsLoading(false);
        }
    };

    const renderForm = () => {
        switch (mode) {
            case "login":
                return (
                    <form onSubmit={handleLogin}>
                        <h2>Login</h2>
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
                        <button type="submit" disabled={isLoading}>{isLoading ? "Logging in..." : "Login"}</button>
                        <p onClick={() => setMode("forgotPassword")}>Forgot Password?</p>
                        <p onClick={() => setMode("register")}>Don't have an account? Register</p>
                    </form>
                );
            case "register":
                return (
                    <form onSubmit={handleRegister}>
                        <h2>Register</h2>
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
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPass}
                            onChange={(e) => setConfirmPass(e.target.value)}
                            required
                        />
                        {errorMessage && <p className="error">{errorMessage}</p>}
                        <button type="submit" disabled={isLoading}>{isLoading ? "Registering..." : "Register"}</button>
                        <p onClick={() => setMode("login")}>Already have an account? Login</p>
                    </form>
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

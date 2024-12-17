import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "../styles/navbar.css"; // Ensure you style the Navbar in this CSS file.

import {
    USERDASH,
    LANDING_PAGE,
} from "../constants/routes";

import logo from "../assets/logo.png";
import { useUser } from "../context/user-context"; // Ensure this hook is defined
// import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Assuming you use MUI icons

export default function Navbar({ currentPath }) {
    // State to manage menu visibility
    const { isLoggedIn, removeUser } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    // Function to toggle menu visibility
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header">
            <nav className="nav container">
                {/* Logo */}
                <NavLink to="/" className="nav__logo">
                    Pawsitively
                    <img src={logo} alt="Logo" className="nav__logo-img" />
                </NavLink>

                {/* Menu */}
                <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink to="/" className="nav__link" onClick={toggleMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/news" className="nav__link" onClick={toggleMenu}>
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/about-us" className="nav__link" onClick={toggleMenu}>
                                Find your Pet
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/favorite" className="nav__link" onClick={toggleMenu}>
                                Adoption System
                            </NavLink>
                        </li>
                    </ul>
                    {/* Close Icon */}
                    <div className="nav__close" onClick={toggleMenu}>
                        <IoClose />
                    </div>
                </div>

                {/* Menu Toggle Icon */}
                <div className="nav__toggle" onClick={toggleMenu}>
                    <IoMenu />
                </div>

                {/* User Section */}
                <div className="user">
                    {isLoggedIn ? (
                        <>
                            <NavLink
                                to={USERDASH}
                                className={`nav__profile-link ${
                                    currentPath === USERDASH ? "active" : ""
                                }`}
                            >
                                {/* <a className="nav__icon" />
                                My Profile
                                </a> */}
                            </NavLink>
                            <button
                                onClick={() => {
                                    removeUser();
                                    navigate(LANDING_PAGE);
                                }}
                                className="nav__logout-btn"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <NavLink to={LANDING_PAGE} className="nav__login-link">
                            Login
                        </NavLink>
                    )}
                </div>
            </nav>
        </header>
    );
}

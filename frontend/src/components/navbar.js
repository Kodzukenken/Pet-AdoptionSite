import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "../styles/navbar.css";
// import logo from "../assets/logo.png"; // Adjust the path if needed, e.g. "../public/images/logo.png";
import logo from "../assets/logo.png"; // Adjust the path as needed

const Navbar = () => {
    // State to manage menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle menu visibility
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header">
            <nav className="nav container">
                <NavLink to="/" className="nav__logo">
                    Pawsitively
                    <img src={logo} alt="Logo" className="logo" /> {/* Logo image */}
                </NavLink>
                <div
                    className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}
                    id="nav-menu"
                >
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
                                Find your pet
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/favorite" className="nav__link" onClick={toggleMenu}>
                                Adoption system
                            </NavLink>
                        </li>
                    </ul>
                    {/* <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                        <IoClose />
                    </div> */}
                </div>
                <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                    <IoMenu />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
import React, { useState } from "react";
import "./navbar.css";

function Navbar(prop) {
    const [menuOpen, setMenuOpen] = useState(false);
    const currentPage = prop.currentPage;

    function handleClick(page) {
        const origin = window.location.origin;
        window.location.href = `${origin + '/' + page}`;
    }

    return (
        <div className="navbar">
            {/* Logo & Title */}
            <div className="navbar-logo" onClick={() => handleClick('')}>
                <img src="/image/mes-logo.png" alt="MES Logo" />
                Mechanical Engineering Society
            </div>

            {/* Mobile Menu Icon */}
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            {/* Navbar Links */}
            <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
                <div 
                    className={currentPage === 'Home' ? 'current-page' : ''}
                    onClick={() => handleClick('')}>
                    Home
                </div>
                <div 
                    className={currentPage === 'Events' ? 'current-page' : ''}
                    onClick={() => handleClick('events')}>
                    Events
                </div>
                <div 
                    className={currentPage === 'Team' ? 'current-page' : ''}
                    onClick={() => handleClick('team')}>
                    Team
                </div>
                <div 
                    className={currentPage === 'Project' ? 'current-page' : ''}
                    onClick={() => handleClick('projects')}>
                    Projects
                </div>
                <div 
                    className={currentPage === 'About' ? 'current-page' : ''}
                    onClick={() => handleClick('about')}>
                    About
                </div>
            </div>
        </div>
    );
}

export default Navbar;

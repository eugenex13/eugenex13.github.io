import React from 'react';
import { Link } from 'react-scroll';
import './Header.css'; // Assuming you will create a separate CSS file for header styles

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Eugene S. Alaan</h1>
                <p>WordPress Developer</p>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="about" smooth={true} duration={500}>About</Link>
                    </li>
                    <li>
                        <Link to="experience" smooth={true} duration={500}>Experience</Link>
                    </li>
                    <li>
                        <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
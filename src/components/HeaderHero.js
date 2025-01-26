import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderHero.css';
import logo from '/Users/shekhzad/Projects/AmirEventlocation/v1/src/components/assest/amir-event-logo-transparent.png';
import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';

const HeaderHero = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header-hero">
            <div className="overlay">
                <div className="container">
                    <div className="nav-left">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Gallerie">Gallerie</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>
                    <div className="logo-container">
                        <img src={logo} alt="Amir Event Location Logo" className="logo" />
                    </div>
                    <div className="nav-right">
                        <ul>
                            <li><Link to="/FAQ">FAQ</Link></li>
                            <li><Link to="/uber-uns">Über Uns</Link></li>
                            <li><Link to="/anfahrt">Anfahrt</Link></li>
                            <li><Link to="/kontakt">Kontakt</Link></li>
                        </ul>
                    </div>
                    <div className="social-icons">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    </div>
                    <div className="hamburger" onClick={toggleMobileMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="mobile-menu open">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Gallerie">Galerie</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/FAQ">FAQ</Link></li>
                            <li><Link to="/uber-uns">Über Uns</Link></li>
                            <li><Link to="/anfahrt">Anfahrt</Link></li>
                            <li><Link to="/kontakt">Kontakt</Link></li>
                        </ul>
                    </div>
                )}
            </div>
            <div className="hero-content">
                <h1>Willkommen bei Amir Event Location</h1>
                <p>Ihr perfekter Veranstaltungsort für jeden Anlass
                </p>
                <Link to="/booking" className="btn-primary">Buchen</Link>
            </div>
        </header>
    );
};

export default HeaderHero;



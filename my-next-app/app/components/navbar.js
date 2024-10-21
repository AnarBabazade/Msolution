"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import '../componentStyle/NavbarStyles.scss';
import { FaGlobe } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [language, setLanguage] = useState("EN");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const toggleLanguage = () => {
        setLanguage(language === "EN" ? "AZ" : "EN");
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Ekran boyutunu kontrol etmek için useEffect kullanıyoruz
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800); // 800px altında mobil kabul ediliyor
            if (window.innerWidth > 800) {
                setIsMenuOpen(false); // Büyük ekranda menüyü kapat
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // İlk render'da kontrol

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link href="/">
                    <img width="200" height="100" className="logo" src="http://msolution.az/storage/settings/01HQE0M564VE2NR1A99D69D9S2.svg" alt="MSolution"></img>
                </Link>
            </div>

            {/* Navbar Links */}
            <div className="openNavbar">
                <ul className={`navbar-links ${isMenuOpen && isMobile ? 'show' : ''}`}>
                    <li>
                        <Link
                            href="/"
                            className={activeLink === "home" ? "active" : ""}
                            onClick={() => handleLinkClick("home")}>
                            Əsas Səhifə
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className={activeLink === "about" ? "active" : ""}
                            onClick={() => handleLinkClick("about")}>
                            Haqqimizda
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/services"
                            className={activeLink === "services" ? "active" : ""}
                            onClick={() => handleLinkClick("services")}>
                            Xidmətlərimiz
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/services"
                            className={activeLink === "services" ? "active" : ""}
                            onClick={() => handleLinkClick("services")}>
                            Layihələrimiz
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/services"
                            className={activeLink === "services" ? "active" : ""}
                            onClick={() => handleLinkClick("services")}>
                            Bizimlə Əlaqə
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Language Switcher */}
            <div className="navbar-language">
                <button onClick={toggleLanguage}>
                    <FaGlobe className="globe" />
                    {language}
                </button>
                <FontAwesomeIcon onClick={toggleMenu} icon={faBars} className="menu" />
            </div>
        </nav>
    );
};

export default Navbar;

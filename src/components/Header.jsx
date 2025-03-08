"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span>GS Travel</span>
        </Link>

        <button className="mobile-menu-button" onClick={toggleMenu}>
          <svg
            className="menu-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav className="desktop-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/admin-login" className="admin-button">
            Admin
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav-container">
            <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="mobile-nav-link" onClick={toggleMenu}>
              About
            </Link>
            <Link
              to="/contact"
              className="mobile-nav-link"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/admin-login"
              className="mobile-admin-button"
              onClick={toggleMenu}
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

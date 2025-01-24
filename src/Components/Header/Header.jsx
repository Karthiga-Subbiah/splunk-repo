import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* <img src="/logo.png" alt="Z-NINTH Logo" className="logo-image" /> */}
        <span className="logo-text">Z-NINTH</span>
      </div>
      <nav className="nav">
        <Link to="/resources">Resources</Link>
        <Link to="/contact">ContactUs</Link>
        <div className="profile-icon">👤</div>
      </nav>
    </header>
  );
};

export default Header;

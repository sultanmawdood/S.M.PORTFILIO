import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <FaProjectDiagram className="brand-icon" />
        <span className="brand-text">BRAND</span>
      </div>
      <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
        <li className="nav-item">
          <a href="#/" className="nav-link active" onClick={toggleMenu}><FaHome /> Home</a>
        </li>
        <li className="nav-item">
          <a href="#/about" className="nav-link" onClick={toggleMenu}><FaInfoCircle /> About</a>
        </li>
        <li className="nav-item">
          <a href="#/services" className="nav-link" onClick={toggleMenu}><FaTools /> Services</a>
        </li>
        <li className="nav-item">
          <a href="#/projects" className="nav-link" onClick={toggleMenu}><FaProjectDiagram /> Portfolio</a>
        </li>
        <li className="nav-item">
          <a href="#/contact" className="nav-link" onClick={toggleMenu}><FaEnvelope /> Contact</a>
        </li>
      </ul>
      <div className={`nav-toggle ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
        {isActive ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
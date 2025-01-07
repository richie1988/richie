import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Mylogo from "../../assets/my-brand.jpeg";
import "../Navbar/Navbar.css";
import Resume from '../../assets/resume/Richard_SoftwareCv.pdf'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="nav-container">
      {/* Logo */}
      <div className="logo-container">
        <Link to="/">
        <img src={Mylogo} alt="logo" className="logo-image" />
        </Link>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-content ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link
            to="/"
            onClick={closeMenu}
            className={isActive("/") ? "active-link" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            onClick={closeMenu}
            className={isActive("/projects") ? "active-link" : ""}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/education"
            onClick={closeMenu}
            className={isActive("/education") ? "active-link" : ""}
          >
            Certifications
          </Link>
        </li>
        <li>
          <Link
            to="/dataAnalyst"
            onClick={closeMenu}
            className={isActive("/dataAnalyst") ? "active-link" : ""}
          >
            TableauData
          </Link>
        </li>
        <li>
        <a
          href={Resume}
          download="Richaards_Resume.pdf"
          className="cv-btn"
          onClick={closeMenu}
        >
          Download CV
        </a>
      </li>
      </ul>
    </nav>
  );
};

export default Navbar;

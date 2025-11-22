// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">Varunkumar Rajamurugan</div>
      <nav className="navbar-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/experience">
          Experience
        </NavLink>
        <NavLink to="/projects">
          Projects
        </NavLink>
        <NavLink to="/skills">
          Skills
        </NavLink>
        <NavLink to="/frameworks">
          Frameworks
        </NavLink>
        <NavLink to="/reports">
          Reports
        </NavLink>
         <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/blog">
          Blog
        </NavLink>
        <NavLink to="/resume">
          Resume
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;

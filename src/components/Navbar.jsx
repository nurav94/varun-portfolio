// src/components/Navbar.jsx
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Close menu when clicking anywhere outside
  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    if (menuOpen) document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [menuOpen]);

  // Prevent click inside menu from closing it
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <header className="navbar">
      {/* Logo / Name */}
      <div
        className="navbar-logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        Varunkumar Rajamurugan
      </div>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <nav
        className={`navbar-links ${menuOpen ? "open" : ""}`}
        onClick={stopPropagation}
      >
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/resume" onClick={() => setMenuOpen(false)}>Resume</NavLink>
        <NavLink to="/experience" onClick={() => setMenuOpen(false)}>Experience</NavLink>
        <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
        <NavLink to="/skills" onClick={() => setMenuOpen(false)}>Skills</NavLink>
        <NavLink to="/frameworks" onClick={() => setMenuOpen(false)}>Frameworks</NavLink>
        {/* <NavLink to="/reports" onClick={() => setMenuOpen(false)}>Reports</NavLink> */}
        <NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;

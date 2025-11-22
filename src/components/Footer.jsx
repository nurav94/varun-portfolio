// src/components/Footer.jsx
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Varunkumar Rajamurugan. All rights reserved.
      </p>
      <p className="footer-note">
      </p>
    </footer>
  );
}

export default Footer;

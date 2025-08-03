// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-top">
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/dmca">DMCA</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
          {/* <Link to="/contact">Contact</Link> */}

        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} grabshort.online All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

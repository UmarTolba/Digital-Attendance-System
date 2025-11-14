import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-project">ESLSCA University project</span>
        </div>

        <div className="footer-right">
          <button className="footer-link">About Us</button>
          <button className="footer-link">Help</button>
          <button className="footer-link">Login</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

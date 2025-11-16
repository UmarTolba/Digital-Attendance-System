import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <header className="nav-container">
      <div className="nav-inner">
        <div className="nav-left">
          <img src="/Eslsca-Logo.png" alt="ESLSCA Logo" className="nav-logo" />
        </div>

        <div className="nav-right">
          <button className="nav-btn">About Us</button>
          <button className="nav-btn">Login</button>
          <button className="nav-btn">Help</button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;

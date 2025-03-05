import React from "react";
import { Link } from "react-router-dom";

const Header = ({ hideExtras, showLogin = true }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src="/logo.png" alt="Company Logo" className="logo" />
        </Link>
      </div>

      <div className="header-right">
        {!hideExtras && (
          <>
            <div className="search-container">
              <input type="text" placeholder="Search..." />
              <button className="search-btn">🔍</button>
            </div>
            <button className="location-btn">📍 Location</button>
          </>
        )}

        {showLogin && (
          <Link to="/userselection">
            <button className="login-btn">Login</button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;

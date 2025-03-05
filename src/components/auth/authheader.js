import React from "react";
import { Link } from "react-router-dom";

const AuthHeader = ({ hideExtras }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src="/logo.png" alt="Company Logo" className="logo" />
        </Link>
      </div>

      {/* ✅ Conditionally hide elements on the login page */}
      {!hideExtras && (
        <div className="header-right">
          <div className="search-container">
            <input type="text" placeholder="Search..." />
            <button className="search-btn">🔍</button>
          </div>
          <button className="location-btn">📍 Location</button>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default AuthHeader;

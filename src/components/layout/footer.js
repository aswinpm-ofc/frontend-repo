import React from "react";
import "../../styles/app.css"; // ✅ Fix path (Move up 2 levels)

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

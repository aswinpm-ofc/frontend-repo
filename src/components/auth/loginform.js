import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/button";
import Input from "../common/input";
import { Link } from "react-router-dom";
import "../../styles/app.css";  // ✅ Import the CSS file

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    alert("Login successful! Redirecting to Home...");
    navigate("/");
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <Input className="input-field" placeholder="Username" />
      <Input className="input-field" type="password" placeholder="Password" />
      <Button className="login-button" onClick={handleLogin}>Login</Button>

      <div className="auth-links">
        <Link to="/forgotpassword">Forgot Password?</Link>
        <Link to="/create-account">Create an Account</Link> {/* ✅ Fixed route */}
      </div>
    </div>
  );
};

export default LoginForm;

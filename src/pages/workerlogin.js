import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/workerlogin.css";

const WorkerLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Worker login successful!");
    navigate("/workerdashboard");  // ✅ Redirect to Worker Dashboard
  };

  return (
    <div className="login-container">
      <h1>Worker Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <div className="auth-links">
          <a href="/forgotpassword">Forgot Password?</a>
          <a href="/workersignup">Create an Account</a>
        </div>
      </form>
    </div>
  );
};

export default WorkerLogin;

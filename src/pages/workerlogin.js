import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import "../styles/app.css";

const WorkerLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Worker login successful!");
    navigate("/");
  };

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default WorkerLogin;

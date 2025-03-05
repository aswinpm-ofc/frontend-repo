import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import "../styles/app.css";

const UserLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("User login successful!");
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <h1>User Login</h1>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <div className="auth-links">
            <a href="/forgotpassword">Forgot Password?</a>
            <a href="/usersignup">Create an Account</a>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UserLogin;

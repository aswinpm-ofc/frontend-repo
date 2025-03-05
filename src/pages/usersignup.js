import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import "../styles/app.css";

const UserSignup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert("User account created successfully!");
    navigate("/login");
  };

  return (
    <>
      <Header hideExtras={true} />
      <div className="signup-container">
        <h1>Sign Up as a User</h1>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Create Account</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UserSignup;

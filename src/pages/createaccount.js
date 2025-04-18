import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import "../styles/createaccount.css"; // Changed to specific CSS file

const CreateAccount = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get("role") || "user"; // Default to "user"

  return (
    <>
      <Header hideExtras={true} />
      <div className={`create-account-container ${role}`}>
        <form className="create-account-form">
          <h1>{role === "worker" ? "Worker Signup" : "User Signup"}</h1>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
          <div className="already-have-account">
            <a href={`/login?role=${role}`}>Already have an account? Login</a>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreateAccount;
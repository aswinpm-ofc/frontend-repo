import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get("role") || "user"; // Default role is "user"

  return (
    <>
      <Header hideExtras={true} />
      <div className={`login-container ${role}`}>
        <form className="login-form">
          <h1>{role === "worker" ? "Worker Login" : "User Login"}</h1>
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
          <button type="submit">Login</button>
          <div className="create-account">
            <a href={`/signup?role=${role}`}>Create an Account</a> {/* ✅ Route to signup with role */}
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;

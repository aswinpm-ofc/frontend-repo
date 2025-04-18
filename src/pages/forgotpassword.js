import React from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import ForgotPasswordForm from "../components/auth/forgotpassword/forgotpasswordform";
import "../styles/forgotpassword.css"; // Changed to specific CSS file

const ForgotPassword = () => {
  return (
    <>
      {/* ✅ Hide search & location but keep Login button */}
      <Header hideExtras={true} showLogin={true} />
      <div className="forgot-password-page">
        <ForgotPasswordForm />
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
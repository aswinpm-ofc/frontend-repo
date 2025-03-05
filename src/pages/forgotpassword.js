import React from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import ForgotPasswordForm from "../components/auth/forgotpassword/forgotpasswordform";
import "../styles/app.css"; // ✅ Ensure correct path

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

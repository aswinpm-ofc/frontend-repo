import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Button from "../components/common/button";
import Input from "../components/common/input";
import "../styles/enterotp.css"; // Changed to specific CSS file

const EnterOtp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerifyOtp = () => {
    if (otp.length === 6) {
      alert("OTP Verified Successfully!");
      navigate("/"); // ✅ Redirect to Home after verification
    } else {
      alert("Invalid OTP. Please enter a 6-digit code.");
    }
  };

  return (
    <>
      {/* ✅ Hide search & location but show login button */}
      <Header hideExtras={true} showLogin={true} />
      <div className="enter-otp-container">
        <h1>Enter OTP</h1>
        <Input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <Button onClick={handleVerifyOtp}>Verify OTP</Button>
      </div>
      <Footer />
    </>
  );
};

export default EnterOtp;
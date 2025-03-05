import React from "react";
import Button from "../../common/button";  
import Input from "../../common/input";  
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ForgotPasswordForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleSendOtp = () => {
    alert("OTP Sent Successfully!");
    navigate("/enterotp"); 
  };

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    handleSendOtp();
  };

  return (
    <div className="forgot-password-page"> {/* ✅ Page Container */}
<form
  onSubmit={handleSubmit(onSubmit)}
  className="forgot-password-form" 
>
  {/* ✅ Corrected Class */}
  <h1>Forgot Password</h1>


        <Input
          {...register("emailOrPhone")}
          className="input-field"
          placeholder="Enter Email / Phone No"
        />

        <Button type="submit" className="submit-btn">
          Send OTP
        </Button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;

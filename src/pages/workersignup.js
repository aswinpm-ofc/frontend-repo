import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import "../styles/app.css";

const WorkerSignup = () => {
  const navigate = useNavigate();
  const [document, setDocument] = useState(null);
  const [location, setLocation] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const handleDocumentUpload = (e) => {
    setDocument(e.target.files[0]);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Worker account created successfully!");
    navigate("/login");
  };

  return (
    <>
      <Header hideExtras={true} />
      <div className="signup-container">
        <h1>Sign Up as a Worker</h1>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          
          {/* Job Description Field */}
          <textarea
            placeholder="Describe your work experience"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          />

          {/* Location Selection */}
          <input
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          {/* Document Upload */}
          <input type="file" accept=".pdf,.jpg,.png" onChange={handleDocumentUpload} required />

          <button type="submit">Create Worker Account</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default WorkerSignup;

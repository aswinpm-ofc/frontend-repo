import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import "../styles/workersignup.css";

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

    const workerData = {
      fullName: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      jobDescription,
      location,
      document: document ? document.name : ""
    };

    localStorage.setItem("workerProfile", JSON.stringify(workerData));
    alert("Worker account created successfully!");
    navigate("/workerdashboard");
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

          <textarea
            placeholder="Describe your work experience"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <input type="file" accept=".pdf,.jpg,.png" onChange={handleDocumentUpload} required />

          <button type="submit">Create Worker Account</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default WorkerSignup;

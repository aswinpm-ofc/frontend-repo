import React from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import "../styles/workersignup.css";

const WorkerProfile = () => {
  const profile = JSON.parse(localStorage.getItem("workerProfile"));

  if (!profile) {
    return (
      <>
        <Header />
        <div className="signup-container">
          <h2>No Profile Data Found</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="signup-container">
        <h1>Worker Profile</h1>
        <p><strong>Full Name:</strong> {profile.fullName}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Job Description:</strong> {profile.jobDescription}</p>
        <p><strong>Location:</strong> {profile.location}</p>
        <p><strong>Uploaded Document:</strong> {profile.document}</p>
      </div>
      <Footer />
    </>
  );
};

export default WorkerProfile;

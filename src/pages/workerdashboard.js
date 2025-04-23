import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 🧭 Import navigation
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import "../styles/workerdashboard.css";

const WorkerDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [acceptedJobs, setAcceptedJobs] = useState([]); // 🧭 Accepted jobs
  const [selectedJob, setSelectedJob] = useState(null); // 🧭 Store selected job for details view
  const navigate = useNavigate();

  // Example of how to load the worker's accepted jobs (you can fetch this from an API)
  useEffect(() => {
    // This is where you'd fetch data or receive it from props/context
    setAcceptedJobs([
      { id: 1, jobTitle: "Plumbing", clientName: "John Doe", description: "Fixing a leak in the kitchen." },
      { id: 2, jobTitle: "Electrical", clientName: "Jane Smith", description: "Install new light fixtures in the living room." },
    ]);
  }, []);

  const handleViewDetails = (job) => {
    setSelectedJob(job); // Set the selected job for details view
  };

  return (
    <>
      {/* ✅ Header */}
      <Header />

      <div className="dashboard-container">
        {/* 🟢 3-Dot Menu Button */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ⋮
        </div>

        {/* 🟢 Dropdown Menu */}
        {menuOpen && (
          <div className="dashboard-actions">
            <button onClick={() => navigate("/jobrequests")}>
              View Job Requests
            </button>
            <button onClick={() => navigate("/workerprofile")}>Update Profile</button>
            <button onClick={() => navigate("/logout")}>Logout</button>
          </div>
        )}

        <h1>Welcome to the Worker Dashboard</h1>
        <p>You can manage your job requests, update your profile, and more.</p>

        {/* Display Accepted Jobs */}
        <h2>Accepted Jobs</h2>
        <div className="job-list">
          {acceptedJobs.length === 0 ? (
            <p>No jobs accepted yet.</p>
          ) : (
            acceptedJobs.map((job) => (
              <div key={job.id} className="job-item">
                <p>{job.jobTitle} - Client: {job.clientName}</p>
                <button
                  className="action-btn"
                  onClick={() => handleViewDetails(job)} // Handle View Details
                >
                  View Details
                </button>
              </div>
            ))
          )}
        </div>

        {/* Show job details if a job is selected */}
        {selectedJob && (
          <div className="job-details">
            <h3>Job Details</h3>
            <p><strong>Job Title:</strong> {selectedJob.jobTitle}</p>
            <p><strong>Client Name:</strong> {selectedJob.clientName}</p>
            <p><strong>Description:</strong> {selectedJob.description}</p>
            {/* Optionally display any additional information like location, time, etc. */}
          </div>
        )}
      </div>

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default WorkerDashboard;

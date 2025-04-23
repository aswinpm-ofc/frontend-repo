import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import "../styles/jobrequests.css";

const JobRequests = () => {
  const [requests, setRequests] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // useNavigate hook for navigating to job details page

  // Get the user's current location using Geolocation API
  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
      },
      (error) => {
        alert("Failed to get location. Please enable location services.");
        setLoading(false);
      }
    );
  }, []);

  // Fetch job requests when user location is available
  useEffect(() => {
    if (userLocation) {
      fetch(`/api/job-requests?lat=${userLocation.latitude}&lng=${userLocation.longitude}`)
        .then((response) => response.json())
        .then((data) => {
          setRequests(data); // Set the filtered requests from backend
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching job requests:", error);
          setLoading(false);
        });
    }
  }, [userLocation]);

  const handleDecision = (id, action) => {
    if (action === "accept") {
      const acceptedJob = requests.find((req) => req.id === id);
      setRequests((prev) => prev.filter((req) => req.id !== id)); // Remove from requests

      // Save accepted job to localStorage
      localStorage.setItem("acceptedJob", JSON.stringify(acceptedJob));

      // Update the state for showing the job on Worker Dashboard
      navigate("/workerdashboard"); // Redirect to worker dashboard after accepting job
    } else {
      setRequests((prev) => prev.filter((req) => req.id !== id)); // Reject job
    }
  };

  return (
    <>
      <Header />
      <div className="job-requests-page">
        <h1>Job Requests</h1>
        {loading ? (
          <p style={{ textAlign: "center", color: "#555" }}>Loading job requests...</p>
        ) : requests.length === 0 ? (
          <p style={{ textAlign: "center", color: "#555" }}>No pending requests within 20 km.</p>
        ) : (
          requests.map((req) => (
            <div className="job-request-card" key={req.id}>
              <h2>{req.name}</h2>
              <p>Job Type: {req.job}</p>
              <div className="job-request-actions">
                <button
                  className="accept-btn"
                  onClick={() => handleDecision(req.id, "accept")}
                >
                  Accept
                </button>
                <button
                  className="reject-btn"
                  onClick={() => handleDecision(req.id, "reject")}
                >
                  Reject
                </button>
                <button
                  className="view-details-btn"
                  onClick={() => navigate(`/job-details/${req.id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default JobRequests;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/jobrequests.css";

const JobRequests = () => {
  const [requests, setRequests] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // useNavigate hook for navigating to job details page

  const mockRequests = [
    { id: 1, name: "Plumbing Job", job: "Plumbing", description: "Fix a leaking pipe", location: "Location 1" },
    { id: 2, name: "Electrical Job", job: "Electrical", description: "Install new lighting", location: "Location 2" }
  ];

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

  useEffect(() => {
    if (userLocation) {
      const filteredRequests = mockRequests.filter((req) => Math.random() < 0.5);
      setRequests(filteredRequests);
      setLoading(false);
    }
  }, [userLocation]);

  const handleDecision = (id, action) => {
    if (action === "accept") {
      const acceptedJob = requests.find((req) => req.id === id);
      localStorage.setItem("acceptedJob", JSON.stringify(acceptedJob)); 
      navigate("/workerdashboard");
    } else {
      setRequests((prev) => prev.filter((req) => req.id !== id));
    }
  };

  return (
    <div className="job-requests-page">
      <h1>Job Requests</h1>
      {loading ? (
        <p>Loading job requests...</p>
      ) : requests.length === 0 ? (
        <p>No job requests found within your location.</p>
      ) : (
        requests.map((req) => (
          <div className="job-request-card" key={req.id}>
            <h2>{req.name}</h2>
            <p>{req.job}</p>
            <p>{req.description}</p>
            <div className="job-request-actions">
              <button onClick={() => handleDecision(req.id, "accept")}>Accept</button>
              <button onClick={() => handleDecision(req.id, "reject")}>Reject</button>
              <button onClick={() => navigate(`/job/${req.id}`)}>View Job Details</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default JobRequests;

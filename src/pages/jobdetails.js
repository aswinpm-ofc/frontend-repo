import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/app.css"; // Ensure styles are applied

const JobDetails = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedService = params.get("service");
  const selectedDate = params.get("date");
  const selectedTime = params.get("time");

  const navigate = useNavigate();
  const [jobDescription, setJobDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [locationSelected, setLocationSelected] = useState("");
  const [coordinates, setCoordinates] = useState(null); // Store latitude & longitude

  // Get user's current location
  const handleSelectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoordinates({ latitude, longitude });
        setLocationSelected(`Lat: ${latitude.toFixed(5)}, Lng: ${longitude.toFixed(5)}`);
      },
      (error) => {
        alert("Failed to get location. Please enable location services.");
      }
    );
  };

  // Handle File Upload
  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  // Handle Form Submission
  const handlePostJob = () => {
    if (!coordinates || !jobDescription) {
      alert("Please select your location and enter job details.");
      return;
    }

    alert(`Job Posted Successfully for ${selectedService} on ${selectedDate} at ${selectedTime}\nLocation: ${locationSelected}`);
    
    // After submission, navigate to a success page or home
    navigate("/");
  };

  return (
    <div className="job-details-wrapper"> {/* Wrapper to apply background */}
      <div className="job-details-container">
        <h1>Job Details</h1>
        <h2>Service: {selectedService || "Not Selected"}</h2>
        <h3>Date: {selectedDate}</h3>
        <h3>Time: {selectedTime}</h3>
  
        {/* Location Selection */}
        <label>📍 Select Location:</label>
        <button className="location-btn" onClick={handleSelectLocation}>
          {locationSelected ? "Location Selected ✅" : "Choose Your Location"}
        </button>
        {locationSelected && <p className="location-text">{locationSelected}</p>}
  
        {/* Job Description */}
        <label>📝 Job Description:</label>
        <textarea 
          placeholder="Describe the job details..." 
          value={jobDescription} 
          onChange={(e) => setJobDescription(e.target.value)}
        />
  
        {/* File Upload */}
        <label>📷 Upload Photos/Videos:</label>
        <input type="file" multiple accept="image/*,video/*" onChange={handleFileChange} className="file-upload"/>
  
        {/* Preview Uploaded Files */}
        <div className="preview-container">
          {files.length > 0 && <p>{files.length} file(s) selected</p>}
        </div>
  
        {/* Post Job Button */}
        <button className="post-job-btn" onClick={handlePostJob}>
          Post Job
        </button>
      </div>
    </div>
    
  );
};

export default JobDetails;

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/app.css"; // Ensure CSS is imported
import { useNavigate } from "react-router-dom";





const ScheduleAppointment = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedService = params.get("service");

  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState("");

  const navigate = useNavigate(); // ✅ Initialize navigate

const handleProceed = () => {
  if (!timeSlot) {
    alert("Please select a time slot.");
    return;
  }
  
  navigate(`/jobdetails?service=${selectedService}&date=${date.toDateString()}&time=${timeSlot}`);
};



  return (
    <div className="schedule-container">
      <h1>Schedule an Appointment</h1>
      <h2>Service: {selectedService || "Not selected"}</h2>

      <div className="calendar-container">
  <Calendar 
    onChange={setDate} 
    value={date} 
    minDate={new Date()} // ✅ This line prevents selecting past dates
  />
</div>


      <div className="time-slots">
        <h3>Select a Time Slot:</h3>
        {["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"].map((slot) => (
          <button key={slot} onClick={() => setTimeSlot(slot)}>
            {slot}
          </button>
        ))}
      </div>

      <button className="proceed-btn" onClick={handleProceed} disabled={!timeSlot}>
        Proceed
      </button>
    </div>
  );
};

export default ScheduleAppointment;

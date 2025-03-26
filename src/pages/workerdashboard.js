import React, { useState } from "react";
import Header from "../components/layout/header";  // ✅ Include Header
import Footer from "../components/layout/footer";
import "../styles/app.css";

const WorkerDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false); // ✅ Track menu state

  return (
    <>
      {/* ✅ Header (Now Visible) */}
      <Header />

      <div className="dashboard-container">
        {/* 🟢 3-Dot Menu Button */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ⋮
        </div>

        {/* 🟢 Dropdown Buttons - Show only when menuOpen is true */}
        {menuOpen && (
          <div className="dashboard-actions">
            <button>View Job Requests</button>
            <button>Update Profile</button>
            <button>Logout</button>
          </div>
        )}

        <h1>Welcome to the Worker Dashboard</h1>
        <p>You can manage your job requests, update your profile, and more.</p>
      </div>

      {/* ✅ Footer (Remains at Bottom) */}
      <Footer />
    </>
  );
};

export default WorkerDashboard;

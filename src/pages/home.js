import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import "../styles/app.css";

const Home = () => {
  const navigate = useNavigate();

  // Navigate to a specific service page
  const handleServiceClick = (service) => {
    navigate(`/schedule?service=${service}`);
  };

  return (
    <div className="home-container">
      {/* ✅ Pass loginRedirect to navigate to User Selection */}
      <Header showLogin={true} loginRedirect="/userselection" />

      <main className="content">
        <h1>Welcome to Home Page</h1>

        {/* ✅ Services Section */}
        <div className="services-container">
          <h2>Choose a Service</h2>
          <div className="services-list">
            {[
              { name: "Plumber", icon: "🚰" },
              { name: "Electrician", icon: "⚡" },
              { name: "Carpenter", icon: "🛠️" },
              { name: "Painter", icon: "🎨" },
            ].map((service, index) => (
              <div
                key={index}
                className="service-card"
                onClick={() => handleServiceClick(service.name)}
              >
                <span className="service-icon">{service.icon}</span>
                <p className="service-name">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

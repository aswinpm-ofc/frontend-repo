import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import UserTypeCard from "../user/usertypecard";
import "../styles/userselectionsection.css";

const UserSelection = () => {
  const navigate = useNavigate();

  const handleUserSelection = (type) => {
    if (type === "User") {
      navigate("/userlogin");
    } else if (type === "Worker") {
      navigate("/workerlogin");
    }
  };

  return (
    <div className="user-selection-page">
      <Header hideExtras={true} showLogin={false} />
      <h1>Who are you?</h1>
      <div className="user-options">
        <UserTypeCard
          imageSrc="/user.png"
          title="User"
          onClick={() => handleUserSelection("User")}
        />
        <UserTypeCard
          imageSrc="/worker.png"
          title="Worker"
          onClick={() => handleUserSelection("Worker")}
        />
      </div>
      <Footer />
    </div>
  );
};

export default UserSelection;

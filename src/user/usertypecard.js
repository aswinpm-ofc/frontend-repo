import React from "react";
import "../styles/app.css"; // ✅ Ensure styles are applied

const UserTypeCard = ({ imageSrc, title, onClick }) => {
  return (
    <div className="user-card" onClick={() => onClick(title)}>
      <img src={imageSrc} alt={`${title} icon`} />
      <p>{title}</p>
    </div>
  );
};

export default UserTypeCard;

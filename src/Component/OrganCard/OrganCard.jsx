import React from "react";
import "./OrganCard.css"

const OrgansCard = ({ icon, organ, date, progress, color }) => {
  return (
    <div className="organ-card">
      <div className="icon">{icon}</div>
      <div>
        <h4>{organ}</h4>
        <p className="date">Date: {date}</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%`, backgroundColor: color }}></div>
        </div>
      </div>
    </div>
  );
};

export default OrgansCard;

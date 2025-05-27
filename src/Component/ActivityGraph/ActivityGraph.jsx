import React from "react";
import "./ActivityGraph.css";

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const ActivityGraph = () => {
  const activityData = [
    ["gray", "cyan", "purple"],
    ["gray", "cyan", "purple", "cyan"],
    ["gray", "purple"],
    ["gray", "cyan", "purple"],
    ["gray", "cyan", "purple"],
    ["gray", "purple", "cyan"],
    ["gray", "cyan", "purple"],
  ];

  return (
    <div className="activity-container">
      <div className="activity-header">
        <h3>Activity</h3>
        <span>3 appointment on this week</span>
      </div>
      <div className="activity-graph">
        {activityData.map((bars, dayIdx) => (
          <div className="day-column" key={dayIdx}>
            <div className="bars">
              {bars.map((color, i) => (
                <div key={i} className={`bar ${color}`} />
              ))}
            </div>
            <p>{days[dayIdx]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityGraph;

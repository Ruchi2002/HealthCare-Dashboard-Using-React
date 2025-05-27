import React from "react";
import "./Calendar.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WeeklyScheduler from "./WeeklySchedular";

const Calendar = () => {
  const weekDays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const dateNumbers = [25, 26, 27, 28, 29, 30, 31];
  const timeSlots = [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ];

  return (
    <div className="calendar-container">
      <div className="calendar-user-actions">
        <img
          src="public\Avatar.png"
          alt="User Avatar"
          className="calendar-avatar"
        />
        <button className="calendar-add-btn">+</button>
      </div>

      {/* Header */}
      <div className="calendar-top">
        <h3>October 2021</h3>
        <div className="calendar-nav">
          <ChevronLeft size={18} />
          <ChevronRight size={18} />
        </div>
      </div>

    <WeeklyScheduler />
    </div>
  );
};

export default Calendar;

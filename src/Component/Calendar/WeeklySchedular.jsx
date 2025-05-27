import React from "react";
import "./WeeklyScheduler.css";

const allSlots = [
  "00:00", "00:30", "01:00", "01:30", "02:00", "02:30",
  "03:00", "03:30", "04:00", "04:30", "05:00", "05:30",
  "06:00", "06:30", "07:00", "07:30", "08:00", "08:30",
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30",
  "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"
];


const scheduleData = [
  {
    day: "Mon",
    date: 25,
    slots:allSlots,
  },
  {
    day: "Tues",
    date: 26,
    slots: allSlots,
    selected: "09:00",
  },
  {
    day: "Wed",
    date: 27,
    slots:allSlots,
  },
  {
    day: "Thurs",
    date: 28,
    slots: allSlots,
  },
  {
    day: "Fri",
    date: 29,
    slots: allSlots,
  },
  {
    day: "Sat",
    date: 30,
    slots: allSlots,
  },
  {
    day: "Sun",
    date: 31,
    slots: allSlots,
  },
];

const WeeklyScheduler = () => {
  return (
    <div className="scheduler-container">
      <div className="schedule-grid">
        {scheduleData.map(({ day, date, slots, selected }, index) => (
          <div className={`day-column ${selected ? "active" : ""}`} key={index}>
            <div className="day-header">
              <span>{day}</span>
              <span>{date}</span>
            </div>
            <div className="slots-scroll">
              {slots.map((slot, idx) => (
                <div
                  key={idx}
                  className={`slot ${slot === selected ? "selected" : ""}`}
                >
                  {slot}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyScheduler;

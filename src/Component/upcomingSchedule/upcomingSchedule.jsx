import React from "react";
import "./upcomingSchedule.css";

const appointments = [
  {
    title: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    icon: "🦷",
    highlight: true
  },
  {
    title: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djones",
    icon: "💪"
  }
];

const upcoming = [
  {
    day: "On Thursday",
    slots: [
      { title: "Health checkup complete", time: "11:00 AM", icon: "💉" },
      { title: "Ophthalmologist", time: "14:00 PM", icon: "👁️" }
    ]
  },
  {
    day: "On Saturday",
    slots: [
      { title: "Cardiologist", time: "12:00 AM", icon: "❤️" },
      { title: "Neurologist", time: "16:00 PM", icon: "🧑‍⚕️" }
    ]
  }
];

const AppointmentCard = ({ title, time, doctor, icon, highlight }) => (
  <div className={`appointment-card ${highlight ? "highlight" : ""}`}>
    <div className="top-row">
      <span className="title">{title}</span>
      <span className="icon">{icon}</span>
    </div>
    <div className="time">{time}</div>
    {doctor && <div className="doctor">{doctor}</div>}
  </div>
);

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-container">
      <div className="top-appointments">
        {appointments.map((appt, idx) => (
          <AppointmentCard key={idx} {...appt} />
        ))}
      </div>
      <h3 className="section-title">The Upcoming Schedule</h3>
      {upcoming.map((dayItem, index) => (
        <div key={index} className="day-block">
          <div className="day-title">{dayItem.day}</div>
          <div className="slot-row">
            {dayItem.slots.map((slot, idx) => (
              <AppointmentCard key={idx} {...slot} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;

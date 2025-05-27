import "./Sidebar.css";
import {
  LayoutDashboard,
  History,
  CalendarDays,
  CalendarClock,
  BarChart2,
  MessageCircle,
  LifeBuoy,
  Settings,
  Menu,
} from "lucide-react";

const Sidebar = () => {
  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show");
  };

  return (
    <>
      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleSidebar}>
        <Menu size={28} />
      </div>

      {/* Sidebar */}
      <div className="sidebar" id="sidebar">
        <div>
          <div className="logo">
            <span className="blue">Health</span>
            <span className="dark">care.</span>
          </div>

          <div className="menu-group">
            <p className="menu-title">General</p>
            <ul>
              <li className="active">
                <span className="icon dashboard-icon">
                  <LayoutDashboard size={18} />
                </span>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <span className="icon history-icon">
                  <History size={18} />
                </span>
                <a href="#">History</a>
              </li>
              <li>
                <span className="icon calendar-icon">
                  <CalendarDays size={18} />
                </span>
                <a href="#">Calendar</a>
              </li>
              <li>
                <span className="icon appointments-icon">
                  <CalendarClock size={18} />
                </span>
                <a href="#">Appointment</a>
              </li>
              <li>
                <span className="icon statistics-icon">
                  <BarChart2 size={18} />
                </span>
                <a href="#">Statistics</a>
              </li>
            </ul>
          </div>

          <div className="menu-group">
            <p className="menu-title">Tools</p>
            <ul>
              <li>
                <span className="icon chat-icon">
                  <MessageCircle size={18} />
                </span>
                <a href="#">Chat</a>
              </li>
              <li>
                <span className="icon support-icon">
                  <LifeBuoy size={18} />
                </span>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="setting">
          <span className="icon setting-icon">
            <Settings size={18} />
          </span>
          Setting
        </div>
      </div>
    </>
  );
};

export default Sidebar;

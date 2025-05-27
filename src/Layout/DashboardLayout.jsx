import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import BodyStatus from "../Component/BodyStatus/BodyStatus";
import OrgansStatus from "../Component/OrganStatus/OrganStatus";
import "./DashboardLayout.css";
import ActivityGraph from "../Component/ActivityGraph/ActivityGraph";
import Calendar from "../Component/Calendar/Calendar";
import UpcomingSchedule from "../Component/upcomingSchedule/upcomingSchedule";
import { FaChevronDown } from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="main-content">
        <div className="main-layout--left">
          <Header />
          <div className="heading">
            <h1>Dashboard</h1>
            <button className="btn">
              This Week <FaChevronDown className="chevron-icon" />
            </button>
          </div>
          <div className="flex-container">
            <BodyStatus />
            <OrgansStatus />
          </div>
          <div className="detail-btn">
            <button className="btn">
              Details <FaChevronDown className="chevron-icon" />
            </button>
          </div>
          <div className="space-y-4">
            <ActivityGraph />
          </div>
        </div>
        <div className="main-layout--right">
          <Calendar />
          <UpcomingSchedule />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;

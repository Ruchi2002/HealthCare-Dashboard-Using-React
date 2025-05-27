import "./Header.css";
import { Bell, Search } from "lucide-react";

const Header = () => {
  return (
    <div className="header">
      <div className="search-bar">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search" />

        <div className="notification">
        <Bell size={20} />
      </div>
      </div>
      
    </div>
  );
};

export default Header;

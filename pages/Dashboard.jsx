import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import logo from "../assets/VRV_logo.jpg";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleNavigation = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      {/* Logo */}
      <img src={logo} alt="Logo" className="dashboard-logo" />

      {/* Menu button */}
      <button
        className="menu-icon"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Menu options */}
      {menuOpen && (
        <div className="menu-options">
          <button onClick={() => handleNavigation("/user")}>Users</button>
          <button onClick={() => handleNavigation("/role")}>Roles</button>
          <button onClick={() => handleNavigation("/privilege")}>
            Privileges
          </button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      {/* Main dashboard content */}
      <div className="dashboard-main">
        <div className="dashboard-card">
          <h3>Active Users</h3>
          <p>Details about the active users go here.</p>
        </div>
        <div className="dashboard-card">
          <h3>Activity</h3>
          <p>Recent changes to user roles and privileges.</p>
        </div>
        <div className="dashboard-card">
          <h3>Account</h3>
          <p>User account details and settings.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

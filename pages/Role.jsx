import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RolePage.css";
import logo from "../assets/VRV_logo.jpg";
import mockRoleTable from "../mock data/mockRoleTable"; // Updated to use the new mock data

const RolePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Filtered role table based on search query
  const filteredRoleTable = mockRoleTable.filter(
    (role) =>
      role.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="page-container">
      {/* Logo */}
      <img src={logo} alt="Logo" className="page-logo" />

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Users or Roles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* Table Container */}
      <div className="roles-table-container">
        <h2>Roles and Privileges</h2>
        <table className="roles-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>User Name</th>
              <th>Role</th>
              <th>Update</th> {/* Update Column */}
            </tr>
          </thead>
          <tbody>
            {filteredRoleTable.length === 0 ? (
              <tr>
                <td colSpan="4">No roles found.</td>
              </tr>
            ) : (
              filteredRoleTable.map((entry) => (
                <tr key={entry.userId}>
                  <td>{entry.userId}</td>
                  <td>{entry.userName}</td>
                  <td>{entry.role}</td>
                  <td>
                    <button className="update-button" disabled={!entry.canUpdate}>
                      {entry.canUpdate ? "Update" : "No Permission"}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Back to Dashboard Button */}
      <button className="button" onClick={handleBackToDashboard}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default RolePage;

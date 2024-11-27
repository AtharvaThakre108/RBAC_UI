import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Privileges.css"; // Import the updated CSS
import logo from "../assets/VRV_logo.jpg"; // logo
import mockPrivileges from "../mock data/PrivilegeMock"; // Mock privileges data
import mockPrivilegeTable from "../mock data/mockPrivilegeTable"; // Mock privilege table

const PrivilegesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Filtered privileges based on search query
  const filteredPrivileges = mockPrivileges.filter(
    (privilege) =>
      privilege.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      privilege.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  const handleFilter = () => {
    alert("Filter functionality to be implemented");
  };

  const handleSort = () => {
    alert("Sort functionality to be implemented");
  };

  const handleEdit = (id) => {
    alert(`Edit functionality for privilege with ID: ${id}`);
    // Implement editing functionality (e.g., navigating to a different page or opening a modal)
  };

  return (
    <div className="page-container">
      {/* Logo */}
      <img src={logo} alt="Logo" className="page-logo" />

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Privileges..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        <div className="filter-sort-options">
          <button className="filter-button" onClick={handleFilter}>
            Filter
          </button>
          <button className="sort-button" onClick={handleSort}>
            Sort
          </button>
        </div>
      </div>

      {/* Privileges Table */}
      <div className="privileges-table-container">
        <h2>Privileges</h2>
        <table className="privileges-table">
          <thead>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">User Name</th>
              <th scope="col">Role</th>
              <th scope="col">Privilege Name</th>
              <th scope="col">Description</th>
              <th scope="col">Update</th> {/* Added Update column */}
            </tr>
          </thead>
          <tbody>
            {filteredPrivileges.length === 0 ? (
              <tr>
                <td colSpan="6">No privileges found.</td>
              </tr>
            ) : (
              filteredPrivileges.map((privilege) => {
                // Find users with the current privilege
                const userPrivilege = mockPrivilegeTable.find((entry) =>
                  entry.privileges.some((p) => p.id === privilege.id)
                );
                return (
                  <tr key={privilege.id}>
                    <td>{userPrivilege ? userPrivilege.userId : "N/A"}</td>
                    <td>{userPrivilege ? userPrivilege.userName : "N/A"}</td>
                    <td>{userPrivilege ? userPrivilege.role.name : "N/A"}</td>
                    <td>{privilege.name}</td>
                    <td>{privilege.description}</td>
                    <td>
                      <button
                        className="update-button"
                        onClick={() => handleEdit(privilege.id)}
                      >
                        Update
                      </button>
                    </td> {/* Update button for each privilege */}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Back to Dashboard Button */}
      <div className="back-button-container">
        <button className="button back-button" onClick={handleBackToDashboard}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default PrivilegesPage;

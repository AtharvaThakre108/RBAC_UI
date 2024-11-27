import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UserPage.css";
import VRVLogo from "../assets/VRV_logo.jpg"; // Proper logo import
import mockUsers from "../mock data/UserMock"; // Mock user data

const UsersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState(mockUsers); // State to manage users
  const [currentPage, setCurrentPage] = useState(1); // State for pagination
  const usersPerPage = 10; // Number of users per page
  const navigate = useNavigate();

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleAddUser = () => {
    // Logic to navigate to the Add User page
    navigate("/add-user");
  };

  const handleRemoveUser = (id) => {
    const confirm = window.confirm("Are you sure you want to remove this user?");
    if (confirm) {
      setUsers(users.filter((user) => user.id !== id));
      alert(`User with ID ${id} removed.`);
    }
  };

  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  const handleSortByName = () => {
    setUsers([...users].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const handleSortByDepartment = () => {
    setUsers([...users].sort((a, b) => a.department.localeCompare(b.department)));
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredUsers.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="page-container">
      {/* Logo */}
      <img src={VRVLogo} alt="Logo" className="page-logo" />

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Users..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
        />
        <div className="filter-sort-options">
          <button className="filter-button" onClick={handleSortByDepartment}>
            Sort by Department
          </button>
          <button className="sort-button" onClick={handleSortByName}>
            Sort by Name
          </button>
        </div>
      </div>

      {/* Table Title */}
      <div className="page-title">Users List</div>

      {/* Users Table */}
      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>User Name</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.department}</td>
                  <td>
                    <button onClick={handleAddUser} className="add-user-button">
                      Add
                    </button>
                    <button
                      onClick={() => handleRemoveUser(user.id)}
                      className="remove-user-button"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {filteredUsers.length > usersPerPage && (
        <div className="pagination-controls">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            Previous
          </button>
          <span className="pagination-info">
            Page {currentPage} of {Math.ceil(filteredUsers.length / usersPerPage)}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(filteredUsers.length / usersPerPage)}
            className="pagination-button"
          >
            Next
          </button>
        </div>
      )}

      {/* Back to Dashboard Button */}
      <button className="button" onClick={handleBackToDashboard}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default UsersPage;

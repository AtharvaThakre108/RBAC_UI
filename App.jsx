// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserPage from "./pages/User";
import RolesPage from "./pages/Role";
import PrivilegesPage from "./pages/Privileges";
import LoginPage from "./pages/LoginPage";
import { useAuth } from "./Context/AuthContext"; // Import useAuth hook

const App = () => {
  const { user } = useAuth(); // Get user from context

  // Protected Route component to prevent access to pages if not logged in
  const ProtectedRoute = ({ element }) => {
    return user ? element : <Navigate to="/" />; // Redirect to login if not authenticated
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
      <Route path="/user" element={<ProtectedRoute element={<UserPage />} />} />
      <Route path="/role" element={<ProtectedRoute element={<RolesPage />} />} />
      <Route path="/privilege" element={<ProtectedRoute element={<PrivilegesPage />} />} />
    </Routes>
  );
};

export default App;

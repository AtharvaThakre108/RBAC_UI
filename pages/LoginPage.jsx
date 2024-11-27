// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";
import { useAuth } from "../Context/AuthContext"; // Import the useAuth hook
import logo from "../assets/VRV_logo.jpg";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth(); // Get the login function from AuthContext
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Input validation
    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }

    try {
      await login(username, password); // Call the login function from context
      navigate("/dashboard"); // Redirect to the dashboard after successful login
    } catch (err) {
      setError("Invalid credentials. Try 'admin' with password 'password'.");
    }
  };

  return (
    <div className="login-container">
      {/* Logo */}
      <img src={logo} alt="Logo" className="login-logo" />

      {/* Login box */}
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        {error && <p className="error-message" role="alert">{error}</p>}
        <form onSubmit={handleLogin}>
          <label htmlFor="username" className="sr-only">Username</label>
          <input
            type="text"
            id="username"
            className="login-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            type="password"
            id="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <a href="/forgot-password" className="forgot-password">
          Forgot password?
        </a>
      </div>
    </div>
  );
};

export default LoginPage;

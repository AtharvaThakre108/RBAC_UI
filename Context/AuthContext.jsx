// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  // Simulate fetching user data 
  useEffect(() => {
    const fetchUser = async () => {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  // Login function 
  const login = async (username, password) => {
    if (username === "admin" && password === "password") {
      const userData = { username: "admin", role: "Admin" };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData)); // Save user to localStorage
      navigate("/dashboard"); // Redirect to dashboard after successful login
    } else {
      throw new Error("Invalid credentials");
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/"); // Redirect to login page
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

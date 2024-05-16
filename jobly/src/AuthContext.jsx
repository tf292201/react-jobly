// AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Create the context
export const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provide the context to your component tree
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Login function
  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:3001/auth/token', {
        username,
        password,
      });
      const token = response.data.token;
      // Save token to localStorage or sessionStorage
      localStorage.setItem('token', token);
      // Set the user state
      setUser({ username });
    } catch (error) {
      throw new Error('Error logging in');
    }
  };

  // Logout function
  const logout = () => {
    // Remove token from localStorage or sessionStorage
    localStorage.removeItem('token');
    // Clear user state
    setUser(null);
    useNavigate().navigate('/login');
  };

  // Value object to be provided by the context
  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axiosInstance from '../api/axios'; // Import your custom Axios instance

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading state

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Send request to validate token
        await axiosInstance.get('/auth/validate-token'); // Example endpoint
        setIsAuthenticated(true); // Valid token
      } catch (error) {
        setIsAuthenticated(false); // Invalid or expired token
      }
    };

    checkAuth();
  }, []);

  // Show loading while authentication status is being checked
  if (isAuthenticated === null) {
    return <p>Loading...</p>;
  }

  // If authenticated, render the children
  if (isAuthenticated) {
    return children;
  }

  // If not authenticated, redirect to login
  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;

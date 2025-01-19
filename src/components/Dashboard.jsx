import React from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios';

const Dashboard = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || 'User';

  // Log out function (optional)
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove token from localStorage
    navigate('/login'); // Redirect back to login page
  };
  const addTask=()=>{
  axiosInstance.get('')
  }
  return (
    <div>
      <h1>Welcome, {username}</h1>
      <div>
        <h2>Your tasks</h2>
        <h3></h3>
      </div>
      <button onClick={handleLogout}>Log Out</button>
      <button onClick={addTask}>Add a new task</button>
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const username = localStorage.getItem('username') || 'User';
  const email = localStorage.getItem('email') || 'example@example.com';
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const toggleProfileDropdown = () => {
    setShowProfileDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('authUser');
    window.location.href = '/login';
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 border-b">
        <div className="flex gap-4">
          <NavLink
            to="/dashboard/your-tasks"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Your Tasks
          </NavLink>
          <NavLink
            to="/dashboard/done-tasks"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Done Tasks
          </NavLink>
          <NavLink
            to="/dashboard/add-task"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add New Tasks
          </NavLink>
          <NavLink
            to="/dashboard/all-tasks"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            All Tasks
          </NavLink>
        </div>
        <div className="relative flex items-center gap-4">
          <div
            className="cursor-pointer text-lg"
            onClick={toggleProfileDropdown}
          >
            👤
          </div>
          {showProfileDropdown && (
            <div className="absolute top-12 right-0 bg-white border rounded shadow-md p-4">
              <p className="text-gray-700">
                <strong>Name:</strong> {username}
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> {email}
              </p>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Log Out
          </button>
        </div>
      </nav>

      {/* Render Child Routes */}
      <Outlet />
    </div>
  );
};

export default Dashboard;

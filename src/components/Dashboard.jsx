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
      <nav style={styles.navbar}>
        <div style={styles.left}>
          <NavLink to="/dashboard/your-tasks" style={styles.navLink}>
            Your Tasks
          </NavLink>
          <NavLink to="/dashboard/done-tasks" style={styles.navLink}>
            Done Tasks
          </NavLink>
          <NavLink to="/dashboard/add-task" style={styles.navLink}>
            Add New Tasks
          </NavLink>
          <NavLink to="/dashboard/all-tasks" style={styles.navLink}>
            All Tasks
          </NavLink>
        </div>
        <div style={styles.right}>
          <div
            style={styles.profileIcon}
            onClick={toggleProfileDropdown}
          >
            👤
          </div>
          {showProfileDropdown && (
            <div style={styles.profileDropdown}>
              <p><strong>Name:</strong> {username}</p>
              <p><strong>Email:</strong> {email}</p>
            </div>
          )}
          <button onClick={handleLogout} style={styles.logoutButton}>
            Log Out
          </button>
        </div>
      </nav>

      {/* Render Child Routes */}
      <Outlet />
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f4f4f4',
    borderBottom: '1px solid #ccc',
  },
  left: {
    display: 'flex',
    gap: '15px',
  },
  navLink: {
    textDecoration: 'none',
    padding: '10px 15px',
    backgroundColor: '#007BFF',
    color: '#fff',
    borderRadius: '5px',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    position: 'relative',
  },
  profileIcon: {
    cursor: 'pointer',
    fontSize: '20px',
  },
  profileDropdown: {
    position: 'absolute',
    top: '40px',
    right: '0',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  },
  logoutButton: {
    padding: '10px',
    backgroundColor: '#FF4D4D',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
};

export default Dashboard;

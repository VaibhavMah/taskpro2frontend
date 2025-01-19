import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Logout = () => {
  const navigate = useNavigate();
  const { setAuthState } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setAuthState({ isAuthenticated: false , token:null });
    navigate('/login');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
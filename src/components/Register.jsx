import React, { useState } from 'react';
import axiosInstance from '../api/axios';  // Axios instance
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Register the user
      const response = await axiosInstance.post('/auth/register', formData);
      const { token, user, needsUsername } = response.data;

      // Store the token in localStorage
      localStorage.setItem('authToken', token);
      localStorage.setItem('authUser', user.id);
  
      // Store the username only if it exists
      if (user.username) {
        localStorage.setItem('username', user.username);
      }

      // If the username is missing, redirect to set-username page
      if (needsUsername) {
        navigate('/set-username');
      } else {
        // Otherwise, redirect to the dashboard
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

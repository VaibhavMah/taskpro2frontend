import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios';
const SetUsername = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axiosInstance.post('/auth/set-username', { username });
      console.log(response);
      setSuccess(response.data.message);
      localStorage.setItem('username',username);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Someting went wrong');
    }
  };

  return (
    <div>
      <h2>Set Your Username</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SetUsername;

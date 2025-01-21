import React, { useState } from 'react';
import axiosInstance from '../api/axios'; // Axios instance
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const credentials = { email, password };
  
    try {
      const response = await axiosInstance.post('/auth/login', credentials);
      const { token, needsUsername, user } = response.data;
  
      localStorage.setItem('authToken', token);
      localStorage.setItem('authUser', user.id);
      localStorage.setItem('email',user.email);  

      // Store the username only if it exists
      if (user.username) {
        localStorage.setItem('username', user.username);
      }
      // Redirect based on the presence of a username
      if (needsUsername) {
        navigate('/set-username');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred');
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;

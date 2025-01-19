import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api', // Express API server address
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // To send cookies along with requests (for session management)
});
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;

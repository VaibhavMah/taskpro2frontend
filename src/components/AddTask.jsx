// AddTask.jsx
import React, { useState } from 'react';
import axiosInstance from '../api/axios'; // Axios instance
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const [task, setTask] = useState({ title: '', dueDate: '', dueTime: '', priority: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('authToken');
      await axiosInstance.post('/tasks', task, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccess('Task added successfully!');
      setTimeout(() => navigate('/dashboard'), 1500);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to add task');
    }
  };

  return (
    <div>
      <h1>Add a New Task</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" name="title" value={task.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Due Date</label>
          <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
        </div>
        <div>
          <label>Due Time</label>
          <input type="time" name="dueTime" value={task.dueTime} onChange={handleChange} required />
        </div>
        <div>
          <label>Priority</label>
          <select name="priority" value={task.priority} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;

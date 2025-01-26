import React, { useState } from 'react';
import axiosInstance from '../api/axios';
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
      setTimeout(() => navigate('/dashboard/your-tasks'), 1500);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to add task');
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add a New Task</h1>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {success && <p className="text-green-600 mb-4">{success}</p>}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4 border border-gray-200"
      >
        <div>
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Due Time</label>
          <input
            type="time"
            name="dueTime"
            value={task.dueTime}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Priority</label>
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;

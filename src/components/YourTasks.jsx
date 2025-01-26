import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axios';

const YourTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axiosInstance.get('/tasks/pending', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTasks(response.data.tasks || []);
      } catch (err) {
        console.error('Error fetching tasks:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const toggleTaskStatus = async (taskId) => {
    // Optimistically update the UI
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));

    try {
      const token = localStorage.getItem('authToken');
      await axiosInstance.post(
        `/tasks/toggle-status/${taskId}`,
        { completed: true }, // Since these are pending tasks, we set them as done
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (err) {
      console.error('Error updating task status:', err);
      // Rollback the UI if the API call fails
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Tasks</h1>
      {loading ? (
        <p className="text-gray-600">Loading tasks...</p>
      ) : tasks.length > 0 ? (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="p-4 bg-white shadow rounded-lg border border-gray-200"
            >
              <div className="mb-2">
                <strong className="text-lg font-semibold text-gray-800">{task.title}</strong>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Due:</strong> {new Date(task.dueDate).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Priority:</strong> {task.priority}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Created on:</strong>{' '}
                {task.createdAt
                  ? new Date(task.createdAt).toLocaleDateString()
                  : 'N/A'}
              </p>
              <button
                onClick={() => toggleTaskStatus(task._id)}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Mark as Done
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No tasks found.</p>
      )}
    </div>
  );
};

export default YourTasks;

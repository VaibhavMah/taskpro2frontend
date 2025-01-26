import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axios';

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axiosInstance.get('/tasks', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTasks(response.data.tasks || []);
      } catch (err) {
        console.error('Error fetching all tasks:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllTasks();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">All Tasks</h1>
      {loading ? (
        <p className="text-gray-600">Loading all tasks...</p>
      ) : tasks.length > 0 ? (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="p-4 bg-white shadow-md rounded-lg border border-gray-200"
            >
              <strong className="text-lg text-blue-600">{task.title}</strong>
              <p className="text-sm text-gray-600">
                Created: {new Date(task.createdAt).toLocaleDateString()}
              </p>
              <p className={`text-sm font-medium ${task.completed ? 'text-green-600' : 'text-yellow-600'}`}>
                Status: {task.completed ? 'Done' : 'Pending'}
              </p>
              {task.completed && (
                <p className="text-sm text-gray-600">
                  Completed On: {new Date(task.completedAt).toLocaleDateString()}
                </p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No tasks found.</p>
      )}
    </div>
  );
};

export default AllTasks;

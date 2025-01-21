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
    <div>
      <h1>All Tasks</h1>
      {loading ? (
        <p>Loading all tasks...</p>
      ) : tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              <strong>{task.title}</strong> - Created: {new Date(task.createdAt).toLocaleDateString()}
              <br />
              Status: {task.completed ? 'Done' : 'Pending'}
              {task.completed && (
                <p>
                  Completed On: {new Date(task.completedAt).toLocaleDateString()}
                </p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks found.</p>
      )}
    </div>
  );
};

export default AllTasks;

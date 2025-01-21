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
      // Optionally refetch tasks or handle this gracefully
    }
  };

  return (
    <div>
      <h1>Your Tasks</h1>
      {loading ? (
        <p>Loading tasks...</p>
      ) : tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              <strong>{task.title}</strong> - Due: {new Date(task.dueDate).toLocaleDateString()}
              <br />
              Priority: {task.priority}
              Created on: {task.createdAt ? new Date(task.createdAt).toLocaleDateString() : 'N/A'} 
              <button onClick={() => toggleTaskStatus(task._id)}>Mark as Done</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks found.</p>
      )}
    </div>
  );
};

export default YourTasks;

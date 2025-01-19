import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axiosInstance.get('/tasks')
      .then((response) => setTasks(response.data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

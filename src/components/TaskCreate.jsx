import React, { useState } from 'react';
import axios from './api/axios';

const CreateTask = () => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/tasks', { name: taskName })
      .then((response) => {
        console.log('Task created:', response.data);
        setTaskName(''); // Clear input field
      })
      .catch((error) => console.error('Error creating task:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
        required
      />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTask;

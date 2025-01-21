import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Import the Login component
import Dashboard from './components/Dashboard'; // Import the Dashboard component
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute
import Register from './components/Register'
import SetUsername from './components/SetUsername';
import AddTask from './components/AddTask';
import AllTasks from './components/AllTasks';
import YourTasks from './components/YourTasks';
import DoneTasks from './components/DoneTasks';


function App() {
  return (
    <Router>
      <Routes>

        <Route path='register' element={<Register/>}/>

        {/* Public Route */}
        <Route path="/login" element={<Login />} />
        {/* Protected Route */}
        <Route path ='/set-username'element={<ProtectedRoute><SetUsername/></ProtectedRoute>}/>

        <Route 
          path="/dashboard" 
          element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/> 

        <Route path="dashboard/add-task" element={<ProtectedRoute><AddTask /></ProtectedRoute>} />
        <Route path='dashboard/all-tasks' element={<ProtectedRoute><AllTasks/></ProtectedRoute>}/>
        <Route path='/dashboard/your-tasks' element={<ProtectedRoute><YourTasks/></ProtectedRoute>}/>
        <Route path='/dashboard/done-tasks' element={<ProtectedRoute><DoneTasks/></ProtectedRoute>}/>

        
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Import the Login component
import Dashboard from './components/Dashboard'; // Import the Dashboard component
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute
import Register from './components/Register'
import SetUsername from './components/SetUsername';

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
          element={<ProtectedRoute><Dashboard /></ProtectedRoute>} 
        />
      </Routes>
    </Router>
  );
}

export default App;

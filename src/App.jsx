import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Login = lazy(() => import('./components/Login'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));
const Register = lazy(() => import('./components/Register'));
const VerifyCode = lazy(() => import('./components/VerifyCode'));
const SetUsername = lazy(() => import('./components/SetUsername'));
const AddTask = lazy(() => import('./components/AddTask'));
const AllTasks = lazy(() => import('./components/AllTasks'));
const YourTasks = lazy(() => import('./components/YourTasks'));
const DoneTasks = lazy(() => import('./components/DoneTasks'));
const LandingPage = lazy(() => import('./components/LandingPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-code" element={<VerifyCode/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/set-username" element={<ProtectedRoute><SetUsername /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
            <Route path="add-task" element={<AddTask />} />
            <Route path="all-tasks" element={<AllTasks />} />
            <Route path="your-tasks" element={<YourTasks />} />
            <Route path="done-tasks" element={<DoneTasks />} />
          </Route>

          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

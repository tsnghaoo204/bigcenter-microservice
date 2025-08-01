import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './user/auth/login/login';
import Confirm from './user/auth/confirm/confirm';
import Dashboard from './user/dashboard/student/dashboard';
import TeacherDashboard from './user/dashboard/teacher/dashboard';
import Register from './user/auth/register/register';
import AdminApp from './admin/App';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/admin/*" element={<AdminApp />} /> 
      </Routes>
    </div>
  );
}

export default App;

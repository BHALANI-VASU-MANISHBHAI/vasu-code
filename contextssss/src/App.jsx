import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route
import Login from './components/Login';  // Import Login component
import Profile from './components/Profile';  // Import Profile component

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />  {/* Route for Login page */}
      <Route path="/profile" element={<Profile />} />  {/* Route for Profile page */}
    </Routes>
  );
}

export default App;

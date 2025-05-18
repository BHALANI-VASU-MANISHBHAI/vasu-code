import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import { UserProvider } from './context/UserContext';  // Import UserProvider
import './index.css';
import App from './App';  // Import App component

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>  {/* Wrap your app with BrowserRouter */}
    <UserProvider>  {/* Wrap your app with UserProvider */}
      <App />
    </UserProvider>
  </BrowserRouter>
);

import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login() {
  // Initialize username and password as empty strings
  let [username, setUserState] = useState('');
  let [password, setPass] = useState('');

  // Access the UserContext to get the setUser function
  const { setUser } = useContext(UserContext);

  // Initialize navigate from react-router-dom
  const navigate = useNavigate();

  // Handle login logic here
  function handleLogin(event) {
    event.preventDefault(); // Prevent page reload
    // Check if the username and password are provided
    if (username && password) {
      setUser(username);  // Update the user state in UserContext
      console.log("Logged in with:", username, password);
      
      // Navigate to the Profile page after login
      navigate('/profile');  // Navigate to the Profile route
      
      // Implement your login logic here (e.g., call an API)
    } else {
      alert("Please enter both username and password.");
    }
  }

  return (
    <div>
      <form>
        <input 
          type="text" 
          placeholder="Username" 
          value={username}  // Bind input value to the state
          onChange={(e) => setUserState(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}  // Bind input value to the state
          onChange={(e) => setPass(e.target.value)} 
        />
        <button 
          type="submit" 
          className="border-amber-950" 
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

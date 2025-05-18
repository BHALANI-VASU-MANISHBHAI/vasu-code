import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Profile() {
  // Access the UserContext to get the user
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Welcome, {user}!</h1>
      <p>This is your profile page.</p>
    </div>
  );
}

export default Profile;

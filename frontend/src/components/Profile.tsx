// src/components/Profile.tsx

import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Profile: React.FC = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <h2>Welcome, {user.email}</h2>
      ) : (
        <h2>Please sign in</h2>
      )}
    </div>
  );
};

export default Profile;

// src/components/Logout.tsx

import React from 'react';
import { logOut } from '../authService';

const Logout: React.FC = () => {
  const handleLogout = async () => {
    try {
      await logOut();
      alert('Logged out successfully!');
    } catch (error) {
      alert('Logout failed.');
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;

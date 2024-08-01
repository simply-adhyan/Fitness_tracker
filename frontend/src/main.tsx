// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the new API
import App from './App';
import { UserProvider } from './UserContext';
import './styles/App.css';

// Create a root for the React app
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Render the App component wrapped with UserProvider
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);

// src/components/Navigation.tsx

import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink for active link styling
import styles from '../styles/Navigation.module.css';  // Import the CSS module

const Navigation: React.FC = () => {
  return (
    <header>
      <h1>Fitness Tracker</h1>
      <nav className={styles.nav}>
        <ul>
          <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/fitness" className={({ isActive }) => isActive ? 'active' : ''}>Fitness Tracker</NavLink></li>
          <li><NavLink to="/food" className={({ isActive }) => isActive ? 'active' : ''}>Food Database</NavLink></li>
          <li><NavLink to="/signup" className={({ isActive }) => isActive ? 'active' : ''}>Sign Up</NavLink></li>
          <li><NavLink to="/signin" className={({ isActive }) => isActive ? 'active' : ''}>Sign In</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

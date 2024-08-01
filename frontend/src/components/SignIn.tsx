// src/components/SignIn.tsx

import React, { useState } from 'react';
import { signIn } from '../authService';
import styles from '../styles/SignIn.module.css';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
      alert('Sign in successful!');
      setError(null);
    } catch (error) {
      setError('Sign in failed.');
    }
  };

  return (
    <div className={styles.signInContainer}>
      <h2 className={styles.signInTitle}>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.signInInput}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.signInInput}
      />
      <button onClick={handleSignIn} className={styles.signInButton}>Sign In</button>
      {error && <div className={styles.signInError}>{error}</div>}
      <a href="/signup" className={styles.signInLink}>Don't have an account? Sign Up</a>
    </div>
  );
};

export default SignIn;

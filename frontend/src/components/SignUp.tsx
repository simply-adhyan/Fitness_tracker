import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from '../styles/SignUp.module.css'; // Import the CSS module
import { signUp, emailExists } from '../authService'

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to store error messages
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUp = async () => {
    try {
      // Check if email already exists
      if (await emailExists(email)) {
        setError('Email already in use.');
        return;
      }
      await signUp(email, password);
      alert('Sign up successful!');
      navigate('/'); // Redirect to Home page on success
    } catch (error) {
      setError('Sign up failed.');
    }
  };

  return (
    <div className={styles.signUpContainer}>
      <h2 className={styles.signUpHeader}>Sign Up</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSignUp(); }}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Sign Up</button>
        {error && <p className={styles.errorMessage}>{error}</p>} 
      </form>
      <a href="/signin" className={styles.formActionLink}>Already have an account? Sign In</a>
    </div>
  );
};

export default SignUp;

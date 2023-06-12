import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Perform user login with email and password
      // Send API request to the backend for authentication
      const response = await axios.post('http://localhost:8081/login', { email, password });
      console.log(response.data); // Handle the response from the backend
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Sign In to Your Account</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-red">
            Sign In
          </button>
          <div className="login-links">
            <a href="/">Forgot password?</a>
            <span className="separator">|</span>
            <a href="/">Sign up for Netflix</a>
          </div>
        </form>
      </div>
      <div className="background-image"></div>
    </div>
  );
};

export default Login;

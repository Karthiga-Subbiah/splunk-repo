import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <h1 className="login-title">LOGIN</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            Email<span className="required">*</span>
          </label>
          <input type="email" id="email" placeholder="Enter your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password<span className="required">*</span>
          </label>
          <div className="password-container">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              placeholder="Enter password"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? '👁' : '👁'}
            </button>
          </div>
          <a href="/password" className="forgot-password">Forgot password?</a>
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="register-text">
        Not register yet? <a href="/signup">Create Account</a>
      </p>
    </div>
  );
};

export default Login;

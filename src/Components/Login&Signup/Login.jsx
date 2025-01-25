import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://35.154.179.226:81/login/", {
        email,
        password,
      });

      console.log("Login Successful:", response.data);
      alert("Login successful!");

      localStorage.setItem("token", response.data.token);
      navigate("/splunk");
    } catch (err) {
      console.error("Login Error:", err);
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    } 
  };

  return (
    <div className="login-container">
      <h1 className="login-title">LOGIN</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">
            Email<span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password<span className="required">*</span>
          </label>
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? "👁" : "👁"}
            </button>
          </div>
          <a href="/password" className="forgot-password">
            Forgot password?
          </a>
        </div>
        {error && <p className="error-text">{error}</p>}
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

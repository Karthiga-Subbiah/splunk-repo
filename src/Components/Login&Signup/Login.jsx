import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Reset error message
    setLoading(true); // Show loading state
  
    try {
      const response = await axios.post("http://35.154.179.226:81/login/", {
        email,
        password,
      });
  
      // Check if the response contains expected data
      if (response.status === 200 && response.data.access_token) {
        console.log("Login Successful:", response.data);
  
        // Store the tokens in localStorage
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
  
        alert("Login successful!");
        navigate("/splunk"); // Navigate to the dashboard
      } else {
        // Unexpected structure in response
        setError("Unexpected response from the server.");
      }
    } catch (err) {
      console.error("Error Details:", err); // Debugging error details
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false); // Remove loading state
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
          <a href="/resetpassword" className="forgot-password">
            Forgot password?
          </a>
        </div>
        {error && <p className="error-text">{error}</p>}
        <button type="submit" className="login-button">
         Login
        </button>
      </form>
      <p className="register-text">
        Not registered yet? <a href="/signup">Create Account</a>
      </p>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const navigate = useNavigate();
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2 className="signup-title">SIGNUP</h2>
        <div className="form-group">
          <label htmlFor="fullName">
            Full Name<span className="required">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter Full Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email ID<span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password (8+ Characters)<span className="required">*</span>
          </label>
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter Password"
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              👁
            </button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">
            Confirm Password (8+ Characters)<span className="required">*</span>
          </label>
          <div className="signup-password-container">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter Password"
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={toggleConfirmPasswordVisibility}
            >
              👁
            </button>
          </div>
        </div>
        
        <label htmlFor="termsCheckbox" className="checkbox-label">
            <input type="checkbox" id="termsCheckbox" name="termsAccepted"/>
            By signing up, you agree to our <a href="">Terms and Conditions</a>.
          </label>
          <button
      type="submit"
      className="signup-button"
      onClick={() => navigate("/")}
    >
      GET STARTED
    </button>
        
        <div className="login-link">
          Already have an account? <a href="/">Login</a>
        </div>
      </form>
    </div>
  );
};

export default Signup;

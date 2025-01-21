import React, { useState } from "react";
import "./Password.css";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Password reset successful!");
    }
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-card">
        <h2>Reset Password!!</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="newPassword">
            New Password <span className="required">*</span>
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="Enter your New Password"
            value={formData.newPassword}
            onChange={handleChange}
            required
            minLength="8"
          />
          <label htmlFor="confirmPassword">
            Confirm Password <span className="required">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Re-Enter your New Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            minLength="8"
          />
          <button type="submit" className="reset-password-button">
            Reset Password
          </button>
        </form>
      </div>
      <a href="/" className="go-back-link">
        ← Go Back
      </a>
    </div>
  );
};

export default ResetPassword;

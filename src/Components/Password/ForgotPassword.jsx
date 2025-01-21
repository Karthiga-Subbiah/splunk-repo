import React, { useState } from "react";
import "./Password.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2>Forgot Password!!</h2>
        <p>Please enter your registered email to reset the password ....</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your mail ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="reset-link-button">
            Request Reset Link
          </button>
        </form>
      </div>
      <a href="/" className="go-back-link">
        ← Go Back
      </a>
    </div>
  );
};

export default ForgotPassword;

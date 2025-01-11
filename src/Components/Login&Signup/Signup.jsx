import React, { useState, useEffect } from "react";
import "./LoginSignup.css"; // Create a CSS file for styling
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {
  const [details, setDetails] = useState();
  const [errors, setErrors] = useState();
  let [users, setUsers] = useState([]);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    console.log(errors,users,"errors")

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      if (!emailRegex.test(value)) {
        setErrors({ ...errors, [name]: "Enter Valid Email!" });
      }else if(users?.email.includes(value)){
        setErrors({ ...errors, [name]: "Email Already Exist!" });
      }else {
        setErrors({ ...errors, [name]: "" });
      }
    } else if (name === "password") {
      if (!passwordRegex.test(value)) {
        setErrors({ ...errors, [name]: "Enter Valid Password!" });
      }  else {
        setErrors({ ...errors, [name]: "" });
      }
    }
    setDetails({ ...details, [name]: value });
  };
//   localStorage.removeItem("accounts")

  useEffect(() => {
    let accounts =JSON.parse(localStorage.getItem("accounts"));
    accounts = accounts || [];
    setUsers({
      accounts,
      email: accounts.map((user) => user.email),
      password: accounts.map((user) => user.password),
    });
  }, []);

  const onSubmit = () => {
    console.log(details, "details");
    let accounts = JSON.parse(localStorage.getItem("accounts"));
    accounts = accounts || [];
    localStorage.setItem("accounts", JSON.stringify([...accounts, details]));
    toast('Account created Successfully!'
        , {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type:"success"
        // theme: "light",
        // transition: Bounce,
        }
    );
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create Account</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
            <div className="form-error">{errors?.name}</div>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <div className="form-error">{errors?.email}</div>
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password *"
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <div className="form-error">{errors?.password}</div>
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password *"
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <div className="form-error">{errors?.confirmPassword}</div>
          </div>
          <button className="btn btn-primary" type="button" onClick={onSubmit}>
            Create
          </button>
    
        </form>
        <div className="login-redirect">
          <p>
            Have an account? <a href="/login">Login Here</a>
          </p>
        </div>
        {/* <div className="social-login">
          <p>Or Register With</p>
          <div className="social-icons">
            <button className="social-btn facebook">F</button>
            <button className="social-btn twitter">T</button>
            <button className="social-btn google">G</button>
          </div>
        </div> */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;

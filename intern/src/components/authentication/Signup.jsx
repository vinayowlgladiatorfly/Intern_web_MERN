import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate for routing
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from './utils';

const Signup = () => {
  const [signupInfo, setsignupInfo] = useState({
    name: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copysignupInfo = { ...signupInfo };
    copysignupInfo[name] = value;
    setsignupInfo(copysignupInfo);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError('Name, email, and password are required');
    }
    try{
      const url = "http://localhost:8000/auth/signup";
      const response = await fetch(url,{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo)

      });
      const result = await response.json();
      const { success, message,error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/login'); // Correct syntax
        }, 1000); // Correct syntax
      }else if(error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if(!success) {
        handleError(message);
      }
      
      console.log(result);
    } catch (err) {
        handleError(err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-4 rounded w-50 shadow">
        <h2 className="text-center mb-4">Sign Up</h2>

        {/* Toggle Button for Company and Student Login */}
        <div className="d-flex justify-content-around mb-4">
          <button>Company User</button>
          <button>Employee User</button>
        </div>

        <ToastContainer />
        <form onSubmit={handleSignup}>
          {/* Name Field */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
              onChange={handleChange}
            />
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={handleChange}
              value={signupInfo.email}
            />
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={handleChange}
              value={signupInfo.password}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>

          {/* Login Link */}
          <p className="text-center mt-3">Already Have an Account?</p>
          <Link to="/login" className="btn btn-outline-secondary w-100 rounded-0">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;

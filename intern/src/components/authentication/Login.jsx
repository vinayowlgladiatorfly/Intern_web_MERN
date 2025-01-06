import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate for routing
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from './utils';

const Login = () => {
  const [loginInfo, setloginInfo] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copyloginInfo = { ...loginInfo };
    copyloginInfo[name] = value;
    setloginInfo(copyloginInfo);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError('email, and password are required');
    }
    try{
      const url = "http://localhost:8000/auth/login";
      const response = await fetch(url,{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo)

      });
      const result = await response.json();
      const { success, message,jwtToken, name, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem('token',jwtToken);
        localStorage.setItem('loggedInUser',name);

        setTimeout(() => {
          navigate('/'); // Correct syntax
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
        <h2 className="text-center mb-4">Log In</h2>

        {/* Toggle Button for Company and Student Login */}
        <div className="d-flex justify-content-around mb-4">
          <button>Company User</button>
          <button>Employee User</button>
        </div>

        <ToastContainer />
        <form onSubmit={handleLogin}>
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
              value={loginInfo.email}
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
              value={loginInfo.password}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Log In
          </button>

          {/* Login Link */}
          <p className="text-center mt-3">Don't have a account?</p>
          <Link to="/signup" className="btn btn-outline-secondary w-100 rounded-0">
            Signup
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

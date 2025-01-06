import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Assuming this is your logo or profile image path
import Search from './Search'; // Assuming you have a Search component
import { ToastContainer } from 'react-toastify';

const HomePage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in by reading from localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set true if token exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false); // Update login state
    navigate('/login'); // Redirect to login page after logout
  };

  const fetchProducts = async () => {
    try {
      const url = "http://localhost:8000/product";
      const headers = {
        headers: {
          "Authorization": localStorage.getItem('token')
        }
      };
      const response = await fetch(url, headers);
      const result = await response.json();
      console.log(result);
    } catch (err) {
      handleError(err); // Replace handleError with console.error
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown menu visibility
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white p-3">
        <div className="container mx-auto flex justify-between items-center">
          <img src={logo} alt="Logo" className="h-8" />

          {/* Navigation Links */}
          <div className="flex space-x-2">
            <NavLink
              to="/home"
              className="text-black px-3 py-5 rounded hover:border-b-2 hover:border-gray-700"
              activeClassName="bg-gray-700"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-black px-3 py-5 rounded hover:border-b-2 hover:border-gray-700"
              activeClassName="bg-gray-700"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="text-black px-3 py-5 rounded hover:border-b-2 hover:border-gray-700"
              activeClassName="bg-gray-700"
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/blog"
              className="text-black px-3 py-5 rounded hover:border-b-2 hover:border-gray-700"
              activeClassName="bg-gray-700"
            >
              Blog
            </NavLink>
          </div>

          {/* Button Container */}
          <div className="flex space-x-2">
            {isLoggedIn ? (
              <>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link to="/PostForm" className="text-white">
                    Post a Job
                  </Link>
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link to="/jobseeker" className="text-white">
                    Job Seeker
                  </Link>
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  <Link to="/signup" className="text-white">
                    Sign Up
                  </Link>
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <Link to="/login" className="text-white">
                    Login
                  </Link>
                </button>
              </>
            )}
          </div>

          {/* User Profile Dropdown */}
          <div className="relative">
            <div
              className="h-12 w-12 rounded-full bg-gray-300 flex justify-center items-center cursor-pointer overflow-hidden"
              onClick={toggleDropdown}
            >
              <img src="../../assets/user-avatar.png" alt="User" className="object-cover w-full h-full" />
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                <ul>
                  <li>
                    <NavLink
                      to="/myprofile"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                      activeClassName="bg-gray-100"
                    >
                      My Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/job-listings"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                      activeClassName="bg-gray-100"
                    >
                      Job Listings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleLogout}
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                      activeClassName="bg-gray-100"
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero bg-blue-500 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to the Job Portal</h1>
        <p className="text-xl mt-4">Find your dream job or post job listings</p>
      </div>

      {/* Search Section */}
      <div className="search-section text-center py-10">
        <Search />
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Job Portal. All rights reserved.</p>
        </div>
      </footer>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default HomePage;


import React, { useState } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom'; // Import NavLink
import logo from '../../assets/logo.png'; // Assuming this is your logo or profile image path
import Search from './Search';

const NavBar = () => {
  // State to handle the visibility of the dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white-800 p-3">
        <div className="container mx-auto flex justify-between items-center">
          <img src={logo} alt="Logo" className="h-8" />
          
          {/* Navigation Links */}
          <div className="flex space-x-2">
            <NavLink 
              to="/" 
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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link to="/PostForm" className="text-white">
                Post a job
              </Link>
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link to="/jobseeker" className="text-white">
                Job Seeker
              </Link>
            </button>
          </div>

          {/* User Profile */}
          <div className="relative">
            <div
              className="h-12 w-12 rounded-full bg-gray-300 flex justify-center items-center cursor-pointer overflow-hidden" // Added overflow-hidden to fix image shape
              onClick={toggleDropdown} // Toggle the dropdown on click
            >
              {/* The profile image */}
              <img src="../../assets/user-avatar.png" alt="User" className="object-cover w-full h-full" />
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                <ul>
                  <li>
                    <NavLink to="/myprofile" className="block px-4 py-2 text-black hover:bg-gray-100" activeClassName="bg-gray-100">
                      My Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/job-listings" className="block px-4 py-2 text-black hover:bg-gray-100" activeClassName="bg-gray-100">
                      Job Listings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/logout" className="block px-4 py-2 text-black hover:bg-gray-100" activeClassName="bg-gray-100">
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};


export default NavBar
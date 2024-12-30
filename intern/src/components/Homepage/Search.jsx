import React, { useState } from 'react';
import bgImage from '../../assets/bgimage.jpg'; // Adjust path as needed
import emplogo1 from '../../assets/emplogo1.jpg'; // Adjust paths for employer logos
import emplogo2 from '../../assets/emplogo2.jpg';
import emplogo3 from '../../assets/emplogo3.jpg';
import emplogo4 from '../../assets/emplogo4.jpg';
import emplogo5 from '../../assets/emplogo5.jpg';
import emplogo6 from '../../assets/emplogo6.jpg';
import emplogo7 from '../../assets/emplogo7.jpg';
import emplogo8 from '../../assets/emplogo8.jpg';
import emplogo9 from '../../assets/emplogo9.jpg';
import emplogo10 from '../../assets/emplogo10.jpg';
import How from '../Abhishek/How'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchInput, category, city);
  };

  const handlePostJob = () => {
    console.log('Post your job clicked');
  };

  return (
    <div>
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'green' }}>
            One million success stories. Start yours today.
          </h1>
          <h2 className="text-white text-3xl font-bold mb-8">
            Find 40,000+ Jobs, Employment & Career Opportunities
          </h2>
          
          {/* Search Bar Section */}
          <div className="bg-white rounded-full p-4 shadow-md flex items-center space-x-4 mb-8">

            <input
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="border-none rounded-l-full px-4 py-2 focus:outline-none w-full"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border-none rounded-full px-4 py-2 focus:outline-none"
            >
              <option value="">Select Category</option>
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
              <option value="Healthcare">Healthcare</option>
            </select>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border-none rounded-full px-4 py-2 focus:outline-none"
            >
              <option value="">Select City</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
            </select>
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white rounded-full px-6 py-2"
            >
              Search
            </button>
          </div>

          {/* Buttons Section */}
          <div className="flex space-x-4 mb-8">
            <button
              onClick={handlePostJob}
              className="bg-green-500 text-white rounded-full px-6 py-2 hover:bg-green-600 transition duration-200"
            >
              Post Your Job
            </button>
            <button
              onClick={handleSearch}
              className="bg-green-500 text-white rounded-full px-6 py-2 hover:bg-green-600 transition duration-200"
            >
              Search Job
            </button>
          </div>
        </div>
      </div>

      {/* Employers Section */}
      <div className="py-10 text-center bg-gray-100">
        <h3 className="text-xl font-bold mb-6">Here You Can See Top Employers</h3>
        <div className="flex justify-center space-x-8">
          {/* Employer Logos with Hover Effect */}
          <img 
            src={emplogo1} 
            alt="Employer 1" 
            className="h-16 transition-transform duration-200 transform hover:scale-110 cursor-pointer" 
          />
          <img 
            src={emplogo2} 
            alt="Employer 2" 
            className="h-16 transition-transform duration-200 transform hover:scale-110 cursor-pointer" 
          />
          <img 
            src={emplogo3} 
            alt="Employer 3" 
            className="h-16 transition-transform duration-200 transform hover:scale-110 cursor-pointer" 
          />
          <img 
            src={emplogo4} 
            alt="Employer 1" 
            className="h-16 transition-transform duration-200 transform hover:scale-110 cursor-pointer" 
          />
          <img 
            src={emplogo5} 
            alt="Employer 2" 
            className="h-16 transition-transform duration-200 transform hover:scale-110 cursor-pointer" 
          />
          <img 
            src={emplogo6} 
            alt="Employer 3" 
            className="h-16 transition-transform duration-200 transform hover:scale-110 cursor-pointer" 
          />
          <img 
            src={emplogo7} 
            alt="Employer 1" 
            className="h-16 transition-transform duration-200 transform hover:scale-110 cursor-pointer" 
          />
          <img 
            src={emplogo8} 
            alt="Employer 2" 
            className="h-16 transition-transform duration-200 transform hover:scale-110 cursor-pointer" 
          />
          <img 
            src={emplogo9} 
            alt="Employer 3" 
            className="h-16 transition-transform duration-200 transform hover:scale-110 cursor-pointer" 
          />
          <img 
            src={emplogo10} 
            alt="Employer 3" 
            className="h-16 transition-transform duration-200 transform hover:scale-110 cursor-pointer" 
          />
        </div>
      </div>
      <How />
    </div>
  );
};

export default SearchBar;

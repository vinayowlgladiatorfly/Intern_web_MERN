import React from 'react';
import bgImage from '../../assets/bgimage.jpg'; // Ensure the path is correct

const JoBseeker = () => {
  // Sample data for companies and roles
  const companies = [
    { name: 'Envato', role: 'UI/UX Designer' },
    { name: 'Themeforest', role: 'Web Developer' },
    { name: 'Graphic River', role: 'Graphic Designer' },
    { name: 'Codecanyon', role: 'Software Engineer' },
    { name: 'Audio Jungle', role: 'Sound Engineer' },
    { name: 'Videohive', role: 'Video Editor' }
  ];

  return (
    <div>
      {/* Background Image Section */}
      <div className="w-full h-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="flex flex-col justify-center items-center h-full text-center bg-black bg-opacity-50">
          <h1 className="text-white text-5xl font-bold mb-4">Welcome Job Seekers!</h1>
          <p className="text-white text-xl mb-8">Find your dream job today.</p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex">
        {/* Side Panel on the Left */}
        <div className="w-64 p-4 bg-gray-100">
          {/* Jobs by City */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Jobs by City</h2>
            <form>
              <label><input type="checkbox" /> New York</label><br />
              <label><input type="checkbox" /> Los Angeles</label><br />
              <label><input type="checkbox" /> Chicago</label><br />
              <label><input type="checkbox" /> Houston</label><br />
              <label><input type="checkbox" /> San Diego</label><br />
              <label><input type="checkbox" /> San Jose</label><br />
            </form>
          </div>

          {/* Jobs by Experience */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Jobs By Experience</h2>
            <form>
              <label><input type="checkbox" /> Full Time/Permanent</label><br />
              <label><input type="checkbox" /> Contract</label><br />
              <label><input type="checkbox" /> Part Time</label><br />
              <label><input type="checkbox" /> Internship</label><br />
              <label><input type="checkbox" /> Freelance</label><br />
              <a href="#" className="text-blue-500 mt-2 inline-block">View More</a>
            </form>
          </div>

          {/* Jobs By Industry */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Jobs By Industry</h2>
            <form>
              <label><input type="checkbox" /> Information Technology</label><br />
              <label><input type="checkbox" /> Advertising/PR</label><br />
              <label><input type="checkbox" /> Services</label><br />
              <label><input type="checkbox" /> Health & Fitness</label><br />
              <label><input type="checkbox" /> Media/Communications</label><br />
              <label><input type="checkbox" /> Fashion</label><br />
              <a href="#" className="text-blue-500 mt-2 inline-block">View More</a>
            </form>
          </div>

          {/* Top Companies */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Top Companies</h2>
            {companies.map((company, index) => (
              <p key={index}>{company.name}</p>
            ))}
            <a href="#" className="text-blue-500 mt-2 inline-block">View More</a>
          </div>

          {/* Salary Range */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Salary Range</h2>
            <form>
              <label><input type="checkbox" /> $0 to $10,012</label><br />
              <label><input type="checkbox" /> $100 to $19,941</label><br />
              <label><input type="checkbox" /> $19,933 to $49,933</label><br />
              <label><input type="checkbox" /> $49,966 to $99,966</label><br />
              <label><input type="checkbox" /> $99,999 to $499,9159</label><br />
              <label><input type="checkbox" /> Above $499,9865</label><br />
              <a href="#" className="text-blue-500 mt-2 inline-block">View More</a>
            </form>
          </div>

          {/* Search Button */}
          <button className="bg-blue-500 text-white rounded-full px-6 py-2 mt-4">
            Search
          </button>
        </div>

        {/* Company Role Section on the Right */}
        {/* This section is directly below the image without gaps */}
        {/* Flex-grow allows it to take available space */}
        {/* We will use a margin-top of -1 or similar to pull it up if needed. */}
        <div className="flex-grow p-4 flex flex-col justify-start items-start mt-[-20px]">
          {companies.map((company, index) => (
            // Each company card
            <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4 w-full flex justify-between items-center">
              {/* Left aligned text */}
              <div>
                <h3 className="text-lg font-semibold">Company Name: {company.name}</h3>
                <p className="text-md">Role Needed: {company.role}</p>
              </div>
              
              {/* Right aligned Apply button */}
              <button className="bg-blue-500 text-white rounded px-4 py-2 ml-auto">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoBseeker;

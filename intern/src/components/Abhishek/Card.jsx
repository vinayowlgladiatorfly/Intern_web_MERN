import React from 'react';
import './Card.css'; // Import the CSS for styling

const Card = () => {
  return (
    <div className="card-container flex justify-center gap-10 my-5 ">
      <div className="job-card bg-white text-left ">
        <h2>Job Title 1</h2>
        <p>Company Name</p>
        <p>Location: City, State</p>
        <button className='bg-blue-600 h-29 w-20 rounded-md text-white '>Apply</button>
      </div>
      <div className="job-card bg-white text-left">
        <h2>Job Title 2</h2>
        <p>Company Name</p>
        <p>Location: City, State</p>
        <button className='bg-blue-600 h-29 w-20 rounded-md text-white'>Apply</button>
      </div>
    </div>
  );
};

export default Card;

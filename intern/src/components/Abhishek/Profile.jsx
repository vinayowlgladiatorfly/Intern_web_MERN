import React from 'react';
import './Profile.css';
import Card from './card';
import How from './How';
import './card.css';
function Profile(){
    return(
        <>
        <div className='flex my-16 mx-16 '>
            
            <div className=' w-1/4 h-auto my-4'>
            <h1 className="text-2xl font-bold text-black w-auto mb-5"> Your Details</h1>
                <div className='flex justify-items-start'><button className='button shadow-md'>Dashboard</button></div>
                <button className='button shadow-md'>My Details</button>
                <button className='button shadow-md'>My job Application</button>
                <button className='button shadow-md'>View Resume</button>
                <button className='button shadow-md'>Build Resume</button>
                <button className='button shadow-md'>Edit Resume</button>
                <button className='button shadow-md'>Delete Resume</button>
                <button className='button shadow-md'>Logout</button>
            </div>

            <div className='grid grid-cols-6 w-auto h-24 mt-6 justify-normal gap-10'>
                <div className='card bg-white shadow-md gap-10 text-center justify-items-end'><h1>Profile Views</h1></div>
                <div className='card bg-white shadow-md gap-10 text-center justify-items-end'><h1>Respond Time</h1></div>
                <div className='card bg-white shadow-md gap-10 text-center justify-items-end'><h1>Ad Expire</h1></div>
                <div className='card bg-white shadow-md gap-10 text-center justify-items-end'><h1>Followers</h1></div>
                <div className='card bg-white shadow-md gap-10 text-center justify-items-end'><h1>My CV List</h1></div>
                <div className='card bg-white shadow-md gap-10 text-center justify-items-end'><h1>Messages</h1></div>  
                <h1 className="text-2xl font-bold text-black mt-5 ml-2"> Similar Jobs</h1>
            </div>
            
        </div>
        <div className='body h-20 w-1/2 ml-96 -mt-56'><Card/><Card/>
        
        </div>
      

        </>
        








    )
}
export default Profile
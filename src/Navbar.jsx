import React from 'react';
import { IoMdHome } from "react-icons/io";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='ml-48 mr-48 mt-5'>
      <div className='bg-blue-800 px-4 py-2'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row items-center hover:bg-orange-500 p-3 rounded-lg'>
            <IoMdHome className='text-white' />
            {/* Use Link for Home */}
            <Link to="/" className='text-white ml-2'>Home</Link>
          </div>
          
          {/* Use Link for other items */}
          <Link to="/leave-types" className='text-white hover:bg-orange-500 p-3 rounded-lg'>Leave Types</Link>
          <Link to="/leaveconfig" className='text-white hover:bg-orange-500 p-3 rounded-lg'>Leave Configuration</Link>
          <Link to="/apply-leave" className='text-white hover:bg-orange-500 p-3 rounded-lg'>Apply Leave</Link>
          <Link to="/leave-requests" className='text-white hover:bg-orange-500 p-3 rounded-lg'>Leave Request</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

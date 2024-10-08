import React from 'react';
import { IoMdHome } from "react-icons/io";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='ml-48 mr-48 mt-5'>
      <div className='bg-blue-800 px-4 py-2'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row items-center hover:bg-orange-500 p-3 rounded-lg'>
            <IoMdHome className='text-white' />
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-white ml-2 ${isActive ? 'bg-orange-500 rounded-lg' : ''}`
              }
            >
              Home
            </NavLink>
          </div>

          <NavLink 
            to="/leave-types" 
            className={({ isActive }) => 
              `text-white hover:bg-orange-500 p-3 rounded-lg ${isActive ? 'bg-orange-500' : ''}`
            }
          >
            Leave Types
          </NavLink>

          <NavLink 
            to="/leaveconfig" 
            className={({ isActive }) => 
              `text-white hover:bg-orange-500 p-3 rounded-lg ${isActive ? 'bg-orange-500' : ''}`
            }
          >
            Leave Configuration
          </NavLink>

          <NavLink 
            to="/apply-leave" 
            className={({ isActive }) => 
              `text-white hover:bg-orange-500 p-3 rounded-lg ${isActive ? 'bg-orange-500' : ''}`
            }
          >
            Apply Leave
          </NavLink>

          <NavLink 
            to="/leave-requests" 
            className={({ isActive }) => 
              `text-white hover:bg-orange-500 p-3 rounded-lg ${isActive ? 'bg-orange-500' : ''}`
            }
          >
            Leave Request
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

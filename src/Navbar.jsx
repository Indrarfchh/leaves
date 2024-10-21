import React from 'react';
import { IoMdHome } from "react-icons/io";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='ml-48 mr-48 mt-5'>
      <div className='bg-transparent border-2 border-solid border-black rounded-lg px-4 py-2'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row items-center hover:bg-orange-500 p-3 rounded-lg'>
            <IoMdHome className='text-black' />
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-black font-bold ml-2 ${isActive ? 'text-green-400' : ''}`
              }
            >
              Home
            </NavLink>
          </div>

          <NavLink 
            to="/leave-types" 
            className={({ isActive }) => 
              `text-black font-bold hover:bg-orange-500 p-3 rounded-lg ${isActive ? 'text-green-400' : ''}`
            }
          >
            Leave Types
          </NavLink>

         

          <NavLink 
            to="/apply-leave" 
            className={({ isActive }) => 
              `text-black font-bold hover:bg-orange-500 p-3 rounded-lg ${isActive ? 'text-green-400' : ''}`
            }
          >
            Apply Leave
          </NavLink>

          <NavLink 
            to="/leave-balance" 
            className={({ isActive }) => 
              `text-black font-bold hover:bg-orange-500 p-3 rounded-lg ${isActive ? 'text-green-400' : ''}`
            }
          >
            Leave Balance
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

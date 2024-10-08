import React, { useState } from 'react'
import { IoMdHome } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import Leave from './LeaveForm';

function Leave1() {
    const [popUp,setPopup] = useState(false);
    const handlePopup = ()=>{
        setPopup(true);
    }
  return (
    <div className='mt-4 ml-48 mr-48'>
   
    <div className='flex flex-row  mt-20'>
    <div className='px-7'>
    <p>Leave Types <br/><button className='flex flex-row items-center bg-blue-600 p-2' onClick={handlePopup}><span>Add Leave</span></button></p>
    </div>
    {popUp && <Leave/>}
   
    </div>
    </div>
  )
}

export default Leave1
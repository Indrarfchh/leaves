import React,{useState} from 'react'
import Leave from './LeaveForm';
import Leaves from './assets/LeaveForm';
import LeaveCal from './TableLeaves';
import LeaveConfiguration from './LeaveConfigaration';
import { FaHome } from 'react-icons/fa';

function LeaveTypes() {

    const [popUp,setPopup] = useState(false);
    const handlePopup = ()=>{
        setPopup(true);
    }


  return (
    <div>
    <div className="border border-gray-300 rounded-md inline-flex items-center p-2 ">
      <FaHome className="text-xl mr-2 " />
      <span className="text-gray-700 font-medium">Home</span>
    </div>
    <div className='flex flex-row ml-20 mt-20'>
    <div className='px-7'>
    <p>Leave Types <br/><button className='flex flex-row items-center bg-blue-600 p-2' onClick={handlePopup}><span>Add Leave</span></button></p>
    </div>
    {popUp && <div>
        <LeaveCal/>
        <LeaveConfiguration/>
        </div>}
    
   
    </div>
    
    </div>
  )
}

export default LeaveTypes
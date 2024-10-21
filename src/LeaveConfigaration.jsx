import React, { useState } from 'react';
import LeaveForm from './LeaveForm'; // Make sure to import your LeaveForm component

const LeaveConfiguration = () => {
  const [weekOff, setWeekOff] = useState(['Saturday', 'Sunday']); // Default week-offs
  const [addLeave,setAddLeave] = useState(false)

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const handleLeave = ()=>{
    setAddLeave(true)
  }

  const toggleWeekOff = (day) => {
    setWeekOff((prev) => {
      const updatedWeekOff = prev.includes(day)
        ? prev.filter((d) => d !== day) // Remove the day if it's already in the array
        : [...prev, day].slice(-2); // Add the day, limiting the selection to two days

      console.log("Updated Week Offs:", updatedWeekOff);
      return updatedWeekOff;
    });
  };

  return (
    <div className='ml-15  mt-5'>
      <div className="space-y-6 p-6 border-2 border-solid inline-block mt-3">
        <h1 className="text-2xl font-bold">Week Off</h1>
        <p className="text-sm text-gray-600">Set The Week Off For Your Company</p>
        <div className="flex space-x-4">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => toggleWeekOff(day)}
              className={`px-4 py-2 rounded text-white ${
                weekOff.includes(day) ? 'bg-red-500' : 'bg-blue-500'
              }`}
            >
              {day}
            </button>
          ))}

        
        </div>
      
       
      </div>
      <div className='m-4'>
      <button className='bg-blue-500 px-4 py-2' onClick={handleLeave}>Apply  Leave</button>
        {/* Pass the weekOff state to LeaveForm as a prop */}
        {addLeave &&  <LeaveForm weekOff={weekOff} /> }
      </div>
    </div>
  );
};

export default LeaveConfiguration;

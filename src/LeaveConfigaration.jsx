import React, { useState } from 'react';
import LeaveConfigComponent from './LeaveConfiration1';
import LeaveConfig from './LeaveConfiration1';



const LeaveConfigaration = () => {
  const [weekOff, setWeekOff] = useState(['Saturday', 'Sunday']);
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const toggleWeekOff = (day) => {
    setWeekOff((prev) => 
      prev.includes(day) 
        ? prev.filter((d) => d !== day) 
        : [...prev, day]
    );
  };

  return (
    <div className='ml-48 mr-48 mt-5'>
    
    
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
    <LeaveConfig/>
    </div>
    
  );
};

export default LeaveConfigaration
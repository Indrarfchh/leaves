import React, { useState } from 'react';
import './App.css'; // Import Tailwind CSS

const LeaveConfig = () => {
  const [selectedDay, setSelectedDay] = useState([]);
  const [leaveOption, setLeaveOption] = useState('Both');
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const toggleDay = (day) => {
    setSelectedDay((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    
    <div className="p-6 space-y-6 mt-5   inline-block border-2 border-solid">
      {/* Select A Day Section */}
      <h2 className="text-lg font-bold">Select A Day</h2>
      <div className="flex space-x-2">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => toggleDay(day)}
            className={`px-5 py-2 rounded text-white ${
              selectedDay.includes(day) ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Select Leave Option Section */}
      <h2 className="text-lg font-bold">Select Leave Option</h2>
      <div className="flex space-x-2">
        {['Before', 'After', 'Both'].map((option) => (
          <button
            key={option}
            onClick={() => setLeaveOption(option)}
            className={`px-4 py-2 rounded border ${
              leaveOption === option ? 'border-blue-500' : 'border-gray-300'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Leave Configuration Section */}
      <h2 className="text-lg font-bold">Leave Configuration</h2>
      <input
        type="text"
        readOnly
        value={selectedDay.join(', ')}
        className="w-full border border-gray-300 p-2 rounded"
        placeholder="No days selected"
      />
    </div>
  );
};

export default LeaveConfig
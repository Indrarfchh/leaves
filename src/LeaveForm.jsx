import React, { useState } from 'react';

// Helper function to get the day of the week as a string (Monday, Tuesday, etc.)
const getDayOfWeek = (date) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[new Date(date).getDay()];
};

// Dummy holiday list (adjust the dates as needed)
const holidays = [
  '2024-10-20', // Example: Dasara
  '2024-10-25', // Example: Deepavali
  '2024-11-17', // Example: Vinayaka Chavithi
  '2024-11-25', // Example: Sri Rama Navami
  '2024-11-29', // Example: Moharam
];

const LeaveForm = ({ weekOff }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [leaveName, setLeaveName] = useState('');
  const [halfDay, setHalfDay] = useState(false);
  const [comments, setComments] = useState('');
  const [errors, setErrors] = useState({});
  const [totalDuration, setTotalDuration] = useState('');

  // Check if a given date is a holiday
  const isHoliday = (date) => holidays.includes(date.toISOString().split('T')[0]);

  // Calculate total duration based on start and end dates, week-offs, holidays, and half-day selection
  const calculateTotalDuration = (start, end, isHalfDay) => {
    const startDateTime = new Date(start);
    const endDateTime = new Date(end);

    let totalDays = 0;

    // Loop through each date from start to end
    for (let d = new Date(startDateTime); d <= endDateTime; d.setDate(d.getDate() + 1)) {
      const currentDay = getDayOfWeek(d);
      const dateStr = d.toISOString().split('T')[0];

      // Check if it's a working day (not a week-off or a holiday)
      if (!weekOff.includes(currentDay) && !isHoliday(d)) {
        totalDays++;
      }
    }

    // If no valid working days, set duration to 0
    if (totalDays === 0) {
      setTotalDuration('0');
    } else {
      // If it's the same start and end date, adjust duration for half-day
      if (startDateTime.getTime() === endDateTime.getTime()) {
        setTotalDuration(isHalfDay ? '0.5' : '1');
      } else {
        // For multiple days, adjust total duration based on half-day selection
        const finalDuration = isHalfDay ? totalDays - 0.5 : totalDays;
        setTotalDuration(finalDuration.toFixed(2));
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    const today = new Date();
    const oneYearFromNow = new Date(today);
    oneYearFromNow.setFullYear(today.getFullYear() + 1);

    const start = new Date(startDate);
    const end = new Date(endDate);

    // Validation for start date
    if (!startDate || start > today) {
      validationErrors.startDate = "Select a valid start date.";
    }

    // Validation for end date
    if (!endDate || (end < start) || (end > oneYearFromNow)) {
      validationErrors.endDate = "Select a valid end date.";
    }

    if (!leaveName) {
      validationErrors.leaveName = "Please select a leave type.";
    }

    const commentsRegex = /^[a-zA-Z\s]*$/;
    if (!commentsRegex.test(comments)) {
      validationErrors.comments = "Comments can only contain letters and spaces.";
    }

    setErrors(validationErrors);

    // Submit the form if there are no validation errors
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully!");
    }
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    calculateTotalDuration(e.target.value, endDate, halfDay);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    calculateTotalDuration(startDate, e.target.value, halfDay);
  };

  const handleHalfDayChange = () => {
    setHalfDay(!halfDay);
    calculateTotalDuration(startDate, endDate, !halfDay);
  };

  const today = new Date().toISOString().split('T')[0];
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(new Date().getDate() - 7); // One week before today
  const oneWeekAgoDate = oneWeekAgo.toISOString().split('T')[0];
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(new Date().getFullYear() + 1);
  const oneYear = oneYearFromNow.toISOString().split('T')[0];

  return (
    <div className='ml-48 mr-48 mt-8'>
      <form onSubmit={handleFormSubmit} className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-md">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Start Date</label>
            <input
              type="date"
              className="border border-gray-300 p-2 w-full rounded-md"
              value={startDate}
              onChange={handleStartDateChange}
              min={oneWeekAgoDate}
              max={oneYear}
            />
            {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">End Date</label>
            <input
              type="date"
              className="border border-gray-300 p-2 w-full rounded-md"
              value={endDate}
              onChange={handleEndDateChange}
              min={oneWeekAgoDate}
              max={oneYear}
            />
            {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Leave Name</label>
          <select
            className="border border-gray-300 p-2 w-full rounded-md"
            value={leaveName}
            onChange={(e) => setLeaveName(e.target.value)}
          >
            <option value="">Select Leave Type</option>
            <option value="Earn Leaves">Earn Leaves</option>
            <option value="Casual Leaves">Casual Leaves</option>
            <option value="Sick Leaves">Sick Leaves</option>
            <option value="Maternity Leaves">Maternity Leaves</option>
            <option value="Paternity Leaves">Paternity Leaves</option>
            <option value="Religious Festival Leaves">Religious Festival Leaves</option>
            <option value="Compassionate Leave">Compassionate Leave</option>
          </select>
          {errors.leaveName && <p className="text-red-500 text-sm">{errors.leaveName}</p>}
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="halfDay"
            className="mr-2"
            checked={halfDay}
            onChange={handleHalfDayChange}
          />
          <label htmlFor="halfDay" className="text-sm font-medium">
            Select half-day leave
          </label>
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Duration</label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-md"
            disabled
            value={totalDuration} // Display total duration
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Request Comments</label>
          <textarea
            className="border border-gray-300 p-2 w-full rounded-md"
            rows="4"
            maxLength={300}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
          {errors.comments && <p className="text-red-500 text-sm">{errors.comments}</p>}
        </div>

        <div className="flex justify-end">
          <button type="button" className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md mr-4">Cancel</button>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LeaveForm;

import React, { useState } from 'react';

const LeaveForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [leaveName, setLeaveName] = useState('');
  const [halfDay, setHalfDay] = useState(false);
  const [comments, setComments] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [errors, setErrors] = useState({});
  const [totalDuration, setTotalDuration] = useState('');

  const calculateTotalDuration = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffInTime = end.getTime() - start.getTime();
      let diffInDays = diffInTime / (1000 * 3600 * 24) + 1; // Adding 1 to include both start and end dates
  
      // Adjust for single-day leave
      if (start.getTime() === end.getTime()) {
        setTotalDuration('1'); // Default to 1 day for single day leave
      } else {
        setTotalDuration(diffInDays.toFixed(2)); // Total days between start and end dates
      }
    } else {
      setTotalDuration(''); // Clear duration if dates are not set
    }
  };
  
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    const today = new Date();
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(today.getDate() - 7);
    
    const oneYearFromNow = new Date(today);
    oneYearFromNow.setFullYear(today.getFullYear() + 1);
  
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    // Validation for start date
    if (!startDate || start < oneWeekAgo || start > today) {
      validationErrors.startDate = "Start date must be within the past week.";
    }
  
    // Validation for end date
    if (!endDate || (end < start) || (end > oneYearFromNow)) {
      validationErrors.endDate = "End date must be today or within one year from today.";
    }

    // Allow single-day leave (start and end date are the same)
    if (!start.getTime() === end.getTime() && (start < today || start > oneYearFromNow)) {
      validationErrors.endDate = "End date must be today or within one year from today.";
    }

    if (!leaveName) {
      validationErrors.leaveName = "Please select a leave type.";
    }
  
    if (!attachment) {
      validationErrors.attachment = "Please attach a document.";
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
    calculateTotalDuration();
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    calculateTotalDuration();
  };

  const handleHalfDayChange = () => {
    setHalfDay(!halfDay);
    calculateTotalDuration();
  };

  const today = new Date().toISOString().split('T')[0];
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(new Date().getDate() - 7);
  const lastWeek = oneWeekAgo.toISOString().split('T')[0];
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
              min={lastWeek}
              max={today}
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
              min={today}
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
            <option value="Sick Leave">Sick Leave</option>
            <option value="Casual Leave">Casual Leave</option>
            <option value="Vacation">Vacation</option>
          </select>
          {errors.leaveName && <p className="text-red-500 text-sm">{errors.leaveName}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Attach Document</label>
          <input
            type="file"
            className="border border-gray-300 p-2 w-full rounded-md"
            onChange={(e) => setAttachment(e.target.files[0])}
          />
          {errors.attachment && <p className="text-red-500 text-sm">{errors.attachment}</p>}
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

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Duration</label>
            <input
              type="number"
              className="border border-gray-300 p-2 w-full rounded-md"
              disabled
              value={halfDay ? '0.5' : ''}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Total Duration</label>
            <input
              type="number"
              className="border border-gray-300 p-2 w-full rounded-md"
              disabled
              value={totalDuration}
            />
          </div>
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

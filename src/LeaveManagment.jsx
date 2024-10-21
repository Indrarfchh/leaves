import React, { useState } from 'react';

const LeaveForms = () => {
  const [leaveName, setLeaveName] = useState('');
  const [leavesPerMonth, setLeavesPerMonth] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Basic validation
    if (!leaveName) {
      validationErrors.leaveName = "Leave name is required.";
    }


    if (!leaveName.trim() || !leaveName.match(/^[A-Za-z\s]+$/)) {
      validationErrors.leaveName = "Leave name must contain only letters and spaces";
    }
    
    if (!leavesPerMonth) {
      validationErrors.leavesPerMonth = "Number of leaves per month is required.";
    } else if (isNaN(leavesPerMonth)) {
      validationErrors.leavesPerMonth = "Must be a number.";
    }
    if (!description) {
      validationErrors.description = "Description is required.";
    }

    setErrors(validationErrors);

    // If no errors, submit form
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully!");
      // Handle form submission logic here
    }
  };

  return (
    <div className='ml-48 mr-48 mt-8'>
      <form onSubmit={handleFormSubmit} className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-md">
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Leave Name</label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-md"
            value={leaveName}
            onChange={(e) => setLeaveName(e.target.value)}
          />
          {errors.leaveName && <p className="text-red-500 text-sm">{errors.leaveName}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Number of Leaves per Month</label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-md"
            value={leavesPerMonth}
            onChange={(e) => setLeavesPerMonth(e.target.value)}
          />
          {errors.leavesPerMonth && <p className="text-red-500 text-sm">{errors.leavesPerMonth}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Description</label>
          <textarea
            className="border border-gray-300 p-2 w-full rounded-md"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        <div className="flex justify-end">
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md">Save</button>
        </div>
      </form>
    </div>
  );
};

export default LeaveForms;

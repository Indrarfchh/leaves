import React, { useState } from 'react';

function Leave() {
  const [formData, setFormData] = useState({
    leaveName: '',
    leavesPerMonth: '',
    leaveDescription: '',
    dateOfJoining: '1-15',
    availableLeaves: '',
    leaveType: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        leaveType: checked
          ? [...prev.leaveType, value]
          : prev.leaveType.filter((type) => type !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    let validationErrors = {};
  
    // leaveName validation
    const trimmedLeaveName = formData.leaveName.trim(); // Trim to remove leading/trailing spaces
    if (!formData.leaveName) {
      validationErrors.leaveName = "Leave Name is required.";
    } else if (formData.leaveName !== trimmedLeaveName) {
      validationErrors.leaveName = "Leading and trailing spaces are not allowed.";
    } else if (!/^[A-Za-z\s]+$/.test(trimmedLeaveName)) {
      validationErrors.leaveName = "Only characters and spaces are allowed.";
    }
  
    // leavesPerMonth validation
    if (!formData.leavesPerMonth || isNaN(formData.leavesPerMonth) || formData.leavesPerMonth <= 0) {
      validationErrors.leavesPerMonth = "Valid Leaves per Month is required and must be greater than 0.";
    } else if (formData.leavesPerMonth > 31) {
      validationErrors.leavesPerMonth = "Only below 31 days are allowed.";
    }
  
    // leaveDescription validation
    const trimmedLeaveDescription = formData.leaveDescription.trim(); // Trim to remove leading/trailing spaces
    if (!trimmedLeaveDescription) {
      validationErrors.leaveDescription = "Leave Description is required.";
    } else if (!/^[A-Za-z\s]+$/.test(trimmedLeaveDescription)) {
      validationErrors.leaveDescription = "Only characters and spaces are allowed in Leave Description.";
    } else if (formData.leaveDescription !== trimmedLeaveDescription) {
      validationErrors.leaveDescription = "Leading and trailing spaces are not allowed.";
    } else if (trimmedLeaveDescription.length > 300) {
      validationErrors.leaveDescription = "Leave Description must be less than 300 characters.";
    }
  
    // dateOfJoining validation
    if (!formData.dateOfJoining) {
      validationErrors.dateOfJoining = "Date of Joining is required.";
    }
  
    // availableLeaves validation
    if (!formData.availableLeaves) {
      validationErrors.availableLeaves = "Please select available leave duration.";
    }
  
    return validationErrors;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log(formData);
      // Submit form logic here
    }
  };

  return (
    <div className='flex flex-row justify-center mt-2 '>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white border-2 border-solid shadow-sm  rounded-lg p-12 space-y-4"
      >
        {/* Leave Name */}
        <div>
          <label htmlFor="leaveName" className="block text-gray-700 mb-1">
            Leave Name
          </label>
          <input
            type="text"
            id="leaveName"
            name="leaveName"
            value={formData.leaveName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-gray-700"
            placeholder="Enter leave name"
          />
          {errors.leaveName && <p className="text-red-500 text-sm">{errors.leaveName}</p>}
        </div>

        {/* How many Leaves per Month */}
        <div>
          <label htmlFor="leavesPerMonth" className="block text-gray-700 mb-1">
            How many Leaves per month
          </label>
          <input
            type="number"
            id="leavesPerMonth"
            name="leavesPerMonth"
            value={formData.leavesPerMonth}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-gray-700"
            placeholder="Enter number of leaves"
          />
          {errors.leavesPerMonth && <p className="text-red-500 text-sm">{errors.leavesPerMonth}</p>}
        </div>

        {/* Description about leave type */}
        <div>
          <label htmlFor="leaveDescription" className="block text-gray-700 mb-1">
            Description about leave type
          </label>
          <textarea
            id="leaveDescription"
            name="leaveDescription"
            value={formData.leaveDescription}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-gray-700"
            placeholder="Enter description"
            maxLength={300}
          />
          {errors.leaveDescription && <p className="text-red-500 text-sm">{errors.leaveDescription}</p>}
        </div>

        {/* Date of Joining */}
        <div>
          <span className="block text-gray-700 mb-1">Date of Joining</span>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="dateOfJoining"
                value="1-15"
                checked={formData.dateOfJoining === '1-15'}
                onChange={handleChange}
                className="mr-2"
              />
              From 1 - 15
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="dateOfJoining"
                value="16-31"
                checked={formData.dateOfJoining === '16-31'}
                onChange={handleChange}
                className="mr-2"
              />
              From 16 - 31
            </label>
          </div>
          {errors.dateOfJoining && <p className="text-red-500 text-sm">{errors.dateOfJoining}</p>}
        </div>

        {/* Available Leaves Dropdown */}
        <div>
          <label className="block text-gray-700 mb-1">Available Leaves</label>
          <select
            name="availableLeaves"
            className="w-full border rounded px-3 py-2"
            onChange={handleChange}
            value={formData.availableLeaves}
          >
            <option value="">Available leaves</option>
            <option value="0.5">0.5</option>
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="2.5">2.5</option>
            <option value="3">3</option>
          </select>
          {errors.availableLeaves && <p className="text-red-500 text-sm">{errors.availableLeaves}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
}

export default Leave;

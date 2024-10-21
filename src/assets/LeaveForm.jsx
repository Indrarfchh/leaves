import React, { useState } from 'react';
import LeaveConfigaration from '../LeaveConfigaration';

function Leaves() {
  const [formData, setFormData] = useState({
    leaveName: '',
    noOfLeavesPerMonth: '',
    description: '',
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
    const trimmedLeaveName = formData.leaveName.trim();
    if (!trimmedLeaveName) {
      validationErrors.leaveName = "Leave Name is required.";
    } else if (trimmedLeaveName !== formData.leaveName) {
      validationErrors.leaveName = "Leading and trailing spaces are not allowed.";
    } else if (!/^[A-Za-z\s]+$/.test(trimmedLeaveName)) {
      validationErrors.leaveName = "Only characters and spaces are allowed.";
    }

    // dateOfJoining validation
    if (!formData.dateOfJoining) {
      validationErrors.dateOfJoining = "Date of Joining is required.";
    }

    // availableLeaves validation
    if (!formData.availableLeaves) {
      validationErrors.availableLeaves = "Please select available leave duration.";
    }

    // noOfLeavesPerMonth validation (allow only numbers between 1 and 31)
    const noOfLeaves = parseInt(formData.noOfLeavesPerMonth, 10);
    if (!formData.noOfLeavesPerMonth) {
      validationErrors.noOfLeavesPerMonth = "Number of leaves per month is required.";
    } else if (isNaN(noOfLeaves) || noOfLeaves < 1 || noOfLeaves > 31) {
      validationErrors.noOfLeavesPerMonth = "Please enter a valid number between 1 and 31.";
    }

    // description validation (max 300 characters, no leading/trailing spaces)
    const trimmedDescription = formData.description.trim();
    if (!trimmedDescription) {
      validationErrors.description = "Description is required.";
    } else if (trimmedDescription.length > 300) {
      validationErrors.description = "Description must be 300 characters or less.";
    } else if (trimmedDescription !== formData.description) {
      validationErrors.description = "Leading and trailing spaces are not allowed.";
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
    <div>
      <div className='flex flex-row justify-center mt-0 '>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white border-2 border-solid shadow-sm rounded-lg p-12 space-y-4"
        >
          {/* Leave Name */}
          <div>
            <label htmlFor="leaveName" className="block text-gray-700 mb-1">
              Leave Name
            </label>
            <select
              name="leaveName"
              onChange={handleChange}
              value={formData.leaveName}
              className="w-full border rounded px-3 py-2"
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

          {/* Number of Leaves Per Month */}
          <div>
            <label htmlFor="noOfLeavesPerMonth" className="block text-gray-700 mb-1">
              Number of Leaves Per Month
            </label>
            <input
              type="number"
              name="noOfLeavesPerMonth"
              onChange={handleChange}
              value={formData.noOfLeavesPerMonth}
              className="w-full border rounded px-3 py-2"
              min="1"
              max="60"
            />
            {errors.noOfLeavesPerMonth && <p className="text-red-500 text-sm">{errors.noOfLeavesPerMonth}</p>}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              onChange={handleChange}
              value={formData.description}
              className="w-full border rounded px-3 py-2"
              maxLength="300"
              rows="3"
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
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
      <LeaveConfigaration />
    </div>
  );
}

export default Leaves;

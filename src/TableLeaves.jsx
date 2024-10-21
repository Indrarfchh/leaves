import React, { useState } from 'react';

function LeaveCal() {
  const [leaveSummary, setLeaveSummary] = useState({
    'Earn Leaves': 0,
    'Casual Leaves': 0,
    'Sick Leaves': 0,
    'Maternity Leaves': 0,
    'Paternity Leaves': 0,
    'Religious Festival Leaves': 0,
    'Compassionate Leave': 0,
  });

  const [formData, setFormData] = useState({
    leaveName: '',
    noOfLeavesPerMonth: '',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [showLeaveBalance, setShowLeaveBalance] = useState(false); // Initially hide the leave balance
  const [isEditMode, setIsEditMode] = useState(false); // To track if form is in edit mode

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let validationErrors = {};
    const trimmedLeaveName = formData.leaveName.trim();

    // Leave Name validation
    if (!trimmedLeaveName) {
      validationErrors.leaveName = "Leave Name is required.";
    }

    // Number of Leaves validation
    const noOfLeaves = parseInt(formData.noOfLeavesPerMonth, 10);
    if (!formData.noOfLeavesPerMonth) {
      validationErrors.noOfLeavesPerMonth = "Number of leaves per month is required.";
    } else if (isNaN(noOfLeaves) || noOfLeaves < 1 || noOfLeaves > 31) {
      validationErrors.noOfLeavesPerMonth = "Please enter a valid number between 1 and 31.";
    }

    // Description validation (max 300 characters)
    const trimmedDescription = formData.description.trim();
    if (!trimmedDescription) {
      validationErrors.description = "Description is required.";
    } else if (trimmedDescription.length > 300) {
      validationErrors.description = "Description must be 300 characters or less.";
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
      // Update the leaveSummary with the new leave data
      setLeaveSummary((prevSummary) => ({
        ...prevSummary,
        [formData.leaveName]: formData.noOfLeavesPerMonth,
      }));
      setShowLeaveBalance(true); // Show Leave Balance after form submission
      setIsEditMode(false); // Exit edit mode after submission
    }
  };

  const handleEditClick = (leaveType) => {
    // Prepopulate the form with the selected leave data
    setFormData({
      leaveName: leaveType,
      noOfLeavesPerMonth: leaveSummary[leaveType],
      description: 'This leave type is assigned based on the company\'s policy.', // Default description, can be customized
    });
    setIsEditMode(true); // Switch to edit mode
  };

  return (
    <div className='ml-5 mt-5'>
      {/* Conditional Form Rendering */}
      {isEditMode || !showLeaveBalance ? (
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white border-2 p-12 space-y-4">
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
              disabled={isEditMode} // Disable the select when editing to prevent changing the leave name
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
              max="31"
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
      ) : (
        <>
          {/* Card Layout for Leave Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {Object.entries(leaveSummary).map(([leaveType, leaveCount]) => (
              <div key={leaveType} className="border rounded shadow p-4">
                <h2 className="text-xl font-semibold mb-2">{leaveType}</h2>
                <p className="text-gray-600">Number of leaves allowed per month: {leaveCount}</p>
                <p className="text-gray-500 text-sm">This leave type is assigned based on the company's policy.</p>
                <button 
                  className="text-blue-600 mt-2" 
                  onClick={() => handleEditClick(leaveType)} // Handle Edit button click
                >
                  Edit
                </button>
              </div>
            ))}
          </div>

          {/* Table Layout for Leave Summary */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Leave Balance</h2>
            <table className="table-auto border-collapse border border-gray-300 mt-4">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 bg-orange-400">Types Of Leaves</th>
                  {Object.keys(leaveSummary).map((leaveType, index) => (
                    <th key={index} className="border border-gray-300 px-4 py-2 bg-gray-200">{leaveType}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 bg-orange-400">Remaining Leaves</td>
                  {Object.values(leaveSummary).map((remainingLeaves, index) => (
                    <td key={index} className="border border-gray-300 px-4 py-2 text-center">{remainingLeaves}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default LeaveCal;

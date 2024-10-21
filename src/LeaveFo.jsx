import React from 'react';

const LeaveFo = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Form Box */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Leave</h2>
        <form className="space-y-4">
          {/* Leave Name */}
          <div>
            <label className="block text-gray-700 font-medium">Leave Name</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter leave name"
            />
          </div>

          {/* Number of Leaves per Month */}
          <div>
            <label className="block text-gray-700 font-medium">Number of Leaves per Month</label>
            <input
              type="number"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter number of leaves"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium">Description</label>
            <textarea
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Save Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      {/* Week Off Section */}
      <div className="mt-8 w-full max-w-md">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Week Off</h3>
        <div className="grid grid-cols-4 gap-2">
          <button className="py-2 bg-blue-500 text-white rounded-lg">Monday</button>
          <button className="py-2 bg-blue-500 text-white rounded-lg">Tuesday</button>
          <button className="py-2 bg-blue-500 text-white rounded-lg">Wednesday</button>
          <button className="py-2 bg-blue-500 text-white rounded-lg">Thursday</button>
          <button className="py-2 bg-blue-500 text-white rounded-lg">Friday</button>
          <button className="py-2 bg-red-500 text-white rounded-lg">Saturday</button>
          <button className="py-2 bg-red-500 text-white rounded-lg">Sunday</button>
        </div>
      </div>

      {/* Apply Leave Button */}
      <div className="absolute top-4 right-4">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
          Apply Leave
        </button>
      </div>
    </div>
  );
};

export default LeaveFo;

import React from 'react';

const LeaveBalance = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4 flex items-center">
          <span className="material-icons-outlined">description</span>
          Leave balance
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr>
                <th className="bg-yellow-500 text-white px-4 py-2">Types Of Leaves</th>
                <th className="bg-gray-300 text-gray-700 px-4 py-2">Casual Leave</th>
                <th className="bg-gray-300 text-gray-700 px-4 py-2">Sick Leave</th>
                <th className="bg-gray-300 text-gray-700 px-4 py-2">Medical Leave</th>
                <th className="bg-gray-300 text-gray-700 px-4 py-2">Annual Leave</th>
                <th className="bg-gray-300 text-gray-700 px-4 py-2">Marriage Leave</th>
                <th className="bg-gray-300 text-gray-700 px-4 py-2">Other</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-yellow-500 text-white px-4 py-2">Remaining Leaves</td>
                <td className="border px-4 py-2 text-center">5</td>
                <td className="border px-4 py-2 text-center">3</td>
                <td className="border px-4 py-2 text-center">2</td>
                <td className="border px-4 py-2 text-center">2</td>
                <td className="border px-4 py-2 text-center">5</td>
                <td className="border px-4 py-2 text-center">2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4 flex items-center">
          <span className="material-icons-outlined">history</span>
          Leave History
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr>
                <th className="bg-gray-300 text-gray-700 px-4 py-2">Employee ID</th>
                <th className="bg-gray-300 text-gray-700 px-4 py-2">Leave Type</th>
                <th className="bg-gray-300 text-gray-700 px-4 py-2">Start Date</th>
                <th className="bg-gray-300 text-gray-700 px-4 py-2">End Date</th>
                <th className="bg-gray-300 text-gray-700 px-4 py-2">Duration</th>
                <th className="bg-gray-300 text-gray-700 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">E1234</td>
                <td className="border px-4 py-2">Casual Leave</td>
                <td className="border px-4 py-2">2023-10-10</td>
                <td className="border px-4 py-2">2023-10-12</td>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2 text-red-500">Cancel</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">E5678</td>
                <td className="border px-4 py-2">Sick Leave</td>
                <td className="border px-4 py-2">2023-09-01</td>
                <td className="border px-4 py-2">2023-09-03</td>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2 text-green-500">Approved</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveBalance;

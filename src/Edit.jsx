import React, { useState } from "react";
import { MdCancel } from "react-icons/md";

const EditDeliverable = () => {
  const [formData, setFormData] = useState({
    deliverableTitle: "",
    deliverableDescription: "",
    measurementCriteria: "",
    expectedCompletionDate: "",
    status: "In Progress",
  });

  const [errors, setErrors] = useState({});

  // Function to allow only alphabetic characters
  const isAlphabetic = (value) => /^[a-zA-Z\s]*$/.test(value);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If field is 'deliverableTitle', 'deliverableDescription', or 'measurementCriteria', validate it
    if (
      ["deliverableTitle", "deliverableDescription", "measurementCriteria"].includes(name)
    ) {
      if (!isAlphabetic(value)) {
        return; // Reject non-alphabetic input
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.deliverableTitle) {
      newErrors.deliverableTitle = "Deliverable title is mandatory";
    }

    if (!formData.expectedCompletionDate) {
      newErrors.expectedCompletionDate = "Completion date is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center bg-orange-400 px-2 py-2 rounded-lg mb-4">
          <h2 className="text-xl font-bold">Edit Deliverable</h2>
          <MdCancel className="text-2xl cursor-pointer" />
        </div>
        <form onSubmit={handleSubmit}>
          {/* Deliverable Title */}
          <div className="mb-4 flex flex-col">
            <div className="flex flex-row items-center">
              <label
                htmlFor="deliverableTitle"
                className="block font-medium w-48 mr-4"
              >
                Deliverable Title
              </label>
              <input
                type="text"
                id="deliverableTitle"
                name="deliverableTitle"
                maxLength={80}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.deliverableTitle}
                onChange={handleChange}
                placeholder="CDA Goals"
              />
            </div>
            {errors.deliverableTitle && (
              <p className="text-red-500 text-sm">{errors.deliverableTitle}</p>
            )}
          </div>

          {/* Deliverable Description */}
          <div className="mb-4 flex flex-col">
            <div className="flex flex-row items-center">
              <label
                htmlFor="deliverableDescription"
                className="block font-medium w-48 mr-4"
              >
                Deliverable Description
              </label>
              <textarea
                id="deliverableDescription"
                name="deliverableDescription"
                maxLength={250}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.deliverableDescription}
                onChange={handleChange}
                placeholder="Complete CDA Goals 100%"
              />
            </div>
            {errors.deliverableDescription && (
              <p className="text-red-500 text-sm">{errors.deliverableDescription}</p>
            )}
          </div>

          {/* Measurement Criteria */}
          <div className="mb-4 flex flex-col">
            <div className="flex flex-row items-center">
              <label
                htmlFor="measurementCriteria"
                className="block font-medium w-48 mr-4"
              >
                Measurement Criteria
              </label>
              <textarea
                id="measurementCriteria"
                name="measurementCriteria"
                maxLength={160}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.measurementCriteria}
                onChange={handleChange}
                placeholder="Complete CDA Goals 100%"
              />
            </div>
            {errors.measurementCriteria && (
              <p className="text-red-500 text-sm">{errors.measurementCriteria}</p>
            )}
          </div>

          {/* Expected Completion Date */}
          <div className="mb-4 flex flex-col">
            <div className="flex flex-row items-center">
              <label
                htmlFor="expectedCompletionDate"
                className="block font-medium w-48 mr-4"
              >
                Expected Completion Date
              </label>
              <input
                type="date"
                id="expectedCompletionDate"
                name="expectedCompletionDate"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.expectedCompletionDate}
                onChange={handleChange}
              />
            </div>
            {errors.expectedCompletionDate && (
              <p className="text-red-500 text-sm">{errors.expectedCompletionDate}</p>
            )}
          </div>

          {/* Status */}
          <div className="mb-4 flex flex-row items-center">
            <label htmlFor="status" className="block font-medium w-48 mr-4">
              Status
            </label>
            <select
              id="status"
              name="status"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="On Hold">On Hold</option>
            </select>
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              onClick={() => alert("Cancel clicked")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDeliverable;







// import React, { useState } from "react";
// import { MdCancel } from "react-icons/md";

// const EditDeliverable = () => {
//   const [formData, setFormData] = useState({
//     deliverableTitle: "",
//     deliverableDescription: "",
//     measurementCriteria: "",
//     expectedCompletionDate: "",
//     status: "In Progress",
//   });

//   const [errors, setErrors] = useState({});

//   // Function to allow only alphabetic characters
//   const isAlphabetic = (value) => /^[a-zA-Z\s]*$/.test(value);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // If field is 'deliverableTitle', 'deliverableDescription', or 'measurementCriteria', validate it
//     if (
//       ["deliverableTitle", "deliverableDescription", "measurementCriteria"].includes(name)
//     ) {
//       if (!isAlphabetic(value)) {
//         return; // Reject non-alphabetic input
//       }
//     }

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let newErrors = {};

//     if (!formData.deliverableTitle) {
//       newErrors.deliverableTitle = "Deliverable title is mandatory";
//     }

//     if (!formData.expectedCompletionDate) {
//       newErrors.expectedCompletionDate = "Completion date is required";
//     }

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       console.log("Form data submitted:", formData);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//       <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
//         <div className="flex justify-between items-center bg-orange-400 px-2 py-2 rounded-lg mb-4">
//           <h2 className="text-xl font-bold">Edit Deliverable</h2>
//           <MdCancel className="text-2xl cursor-pointer" />
//         </div>
//         <form onSubmit={handleSubmit}>
//           {/* Deliverable Title */}
//           <div className="mb-4">
//             <label
//               htmlFor="deliverableTitle"
//               className="block font-medium mb-1"
//             >
//               Deliverable Title
//             </label>
//             <input
//               type="text"
//               id="deliverableTitle"
//               name="deliverableTitle"
//               maxLength={80}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               value={formData.deliverableTitle}
//               onChange={handleChange}
//               placeholder="CDA Goals"
//             />
//             {errors.deliverableTitle && (
//               <p className="text-red-500 text-sm">{errors.deliverableTitle}</p>
//             )}
//           </div>

//           {/* Deliverable Description */}
//           <div className="mb-4">
//             <label
//               htmlFor="deliverableDescription"
//               className="block font-medium mb-1"
//             >
//               Deliverable Description
//             </label>
//             <textarea
//               id="deliverableDescription"
//               name="deliverableDescription"
//               maxLength={250}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               value={formData.deliverableDescription}
//               onChange={handleChange}
//               placeholder="Complete CDA Goals 100%"
//             />
//             {errors.deliverableDescription && (
//               <p className="text-red-500 text-sm">{errors.deliverableDescription}</p>
//             )}
//           </div>

//           {/* Measurement Criteria */}
//           <div className="mb-4">
//             <label
//               htmlFor="measurementCriteria"
//               className="block font-medium mb-1"
//             >
//               Measurement Criteria
//             </label>
//             <textarea
//               id="measurementCriteria"
//               name="measurementCriteria"
//               maxLength={160}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               value={formData.measurementCriteria}
//               onChange={handleChange}
//               placeholder="Complete CDA Goals 100%"
//             />
//             {errors.measurementCriteria && (
//               <p className="text-red-500 text-sm">{errors.measurementCriteria}</p>
//             )}
//           </div>

//           {/* Expected Completion Date */}
//           <div className="mb-4">
//             <label
//               htmlFor="expectedCompletionDate"
//               className="block font-medium mb-1"
//             >
//               Expected Completion Date
//             </label>
//             <input
//               type="date"
//               id="expectedCompletionDate"
//               name="expectedCompletionDate"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               value={formData.expectedCompletionDate}
//               onChange={handleChange}
//             />
//             {errors.expectedCompletionDate && (
//               <p className="text-red-500 text-sm">{errors.expectedCompletionDate}</p>
//             )}
//           </div>

//           {/* Status */}
//           <div className="mb-4">
//             <label htmlFor="status" className="block font-medium mb-1">
//               Status
//             </label>
//             <select
//               id="status"
//               name="status"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               value={formData.status}
//               onChange={handleChange}
//             >
//               <option value="In Progress">In Progress</option>
//               <option value="Completed">Completed</option>
//               <option value="On Hold">On Hold</option>
//             </select>
//           </div>

//           {/* Submit and Cancel Buttons */}
//           <div className="flex justify-end space-x-4">
//             <button
//               type="submit"
//               className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
//             >
//               Submit
//             </button>
//             <button
//               type="button"
//               className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
//               onClick={() => alert("Cancel clicked")}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditDeliverable;

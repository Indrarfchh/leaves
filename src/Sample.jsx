
import { TiPencil } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Laxman() {
  const initialData = {
    education: "",
    institutionName: "",
    universityName: "",
    degree: "",
    majors: "",
    yearOfPassing: "",
    certificationDate: "",
    percentage: "",
    state: "",
    country: "",
    attachment: "",
  };

  /* const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        await axios.post(`http://192.168.0.105:8080/employeeservice/education/createEducationDetails?employeeId=HRMS2`, formData);
        
        if (editIndex !== null) {
          const updatedTableData = tableData.map((row, index) =>
            index === editIndex ? formData : row
          );
          setTableData(updatedTableData);
        } else {
          setTableData([...tableData, formData]);
        }
        
        handleClosePopup();
        console.log(tableData);
      } catch (error) {
        console.error("Error posting data:", error);
      }
    } else {
      console.log("Failed to submit");
    }
  };
 */

  /*  const handleDelete = (index) => {
    const updatedTableData = tableData.filter((_, i) => i !== index);
    setTableData(updatedTableData);
  }; */

  const [formData, setFormData] = useState({ ...initialData });
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({});
  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [educationLabel, setEducationLabel] = useState({
    institutionName: "institutionName",
    universityName: "universityName",
    degree: "degree",
    majors: "majors",
  });

  const educationOptions = ["SSC", "Inter", "Diploma", "Graduation", "Post Graduation"];

  // Fetch data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://192.168.0.105:8080/employeeservice/education/HRMS2`);
        setTableData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (formData.education) {
      // Set different labels based on education level
      const labels = {
        SSC: { institutionName: "School Name", universityName: "universityName", degree: "degree", majors: "majors" },
        Inter: { institutionName: "College Name", universityName: "universityName", degree: "degree", majors: "majors" },
        Diploma: { institutionName: "College Name", universityName: "University", degree: "degree", majors: "majors" },
        Graduation: { institutionName: "College Name", universityName: "University", degree: "degree", majors: "majors" },
        PostGraduation: { institutionName: "College Name", universityName: "University", degree: "degree", majors: "majors" }
      };
      setEducationLabel(labels[formData.education] || labels.SSC);
    }
  }, [formData.education]);

  // Form validation
  const validateForm = () => {
    let newErrors = {};
    const currentYe = new Date().getFullYear();
    const previousYear = currentYe - 100;

    if (formData.education === '') {
      newErrors.education = 'Select One';
    }

    if (!formData.institutionName.match(/^[A-Za-z\s]{4,40}$/)) {
      newErrors.institutionName = `${educationLabel.institutionName} must be 4-40 characters and contain only letters.`;
    }

    // Add other validation rules similarly...

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission (POST/PATCH)
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        if (editIndex !== null) {
          // PATCH request to update existing data
          await axios.patch(`http://192.168.0.105:8080/employeeservice/education/updateEducationDetails/${formData.id}`, formData);
          const updatedTableData = tableData.map((row, index) => index === editIndex ? formData : row);
          setTableData(updatedTableData);
        } else {
          // POST request to add new data
          await axios.post(`http://192.168.0.105:8080/employeeservice/education/createEducationDetails?employeeId=HRMS2`, formData);
          setTableData([...tableData, formData]);
        }

        handleClosePopup();
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    }
  };

  // Handle deleting a record (DELETE)
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://192.168.0.105:8080/employeeservice/education/deleteEducationDetails/${id}`);
      setTableData(tableData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleOpenPopup = (index = null) => {
    if (index !== null) {
      setFormData({ ...tableData[index] });
      setEditIndex(index);
    } else {
      setFormData({ ...initialData });
      setEditIndex(null);
    }
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setEditIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <div className="mr-10 ml-6">
        <div className="flex flex-row text-left justify-start px-3 py-2  border-2 border-orange-500 rounded-md w-[160px] mb-5 mt-5">
          <FaLessThan className="text-black mr-1 mt-1" />
          <button>
            <span className="text font-semibold text-black">Previous Page</span>
          </button>
        </div>
      </div>
      <div>
        <div className="p-4 pt-5 mt-5 ml-48 mr-48">
          <table className="w-full">
            <thead>
              <tr>
                <th
                  className="py-2 px-4 text-left bg-orange-500 text-white rounded-t-md"
                  colSpan="12"
                >
                  Lakshman
                </th>
              </tr>
              <tr>
                <th className="py-2 px-4 text-left" colSpan="11">
                  education Details
                </th>
                <th
                  className="inline-block cursor-pointer mr-4 py-1 px-4 text-right bg-green-600 m-2 text-white border-rounded"
                  onClick={handleAddRow}
                >
                  <button type="button">Add</button>
                </th>
              </tr>
            </thead>
            <tbody className="border border-black border-collapse">
              <tr>
                <th className="py-2 px-1 border-b-black border-2 border-solid border-black text-center">
                  education
                </th>
                <th className="py-2 px-1 border-b-black border-2 border-solid border-black text-center">
                  {educationLabel.institutionName}
                </th>
                <th className="py-2 px-2 border-b-black border-2 border-solid border-black text-center">
                  {educationLabel.universityName}
                </th>
                <th className="py-2 px-2 border-b-black border-2 border-solid border-black text-center">
                  {educationLabel.degree}
                </th>
                <th className="py-2 px-2 border-b-black border-2 border-solid border-black text-center">
                  {educationLabel.majors}
                </th>
                <th className="py-2 px-2 border-b-black border-2 border-solid border-black text-center">
                  Year of Passing
                </th>
                <th className="py-2 px-2 border-b-black border-2 border-solid border-black text-center">
                  Certificate Issue Date
                </th>
                <th className="py-2 px-2 border-b-black border-2 border-solid border-black text-center">
                  Percentage/Grade
                </th>
                <th className="py-2 px-2 border-b-black border-2 border-solid border-black text-center">
                  state
                </th>
                <th className="py-2 px-2 border-b-black border-2 border-solid border-black text-center">
                  country
                </th>
                <th className="py-2 px-2 border-b-black border-2 border-solid border-black text-center">
                  attachment
                </th>
                <th className="py-2 px-2 border-b-black border-2 border-solid border-black text-center">
                  Actions
                </th>
              </tr>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="py-5 px-4 border-b border-gray-900 border-r text-center  max-w-[100px]  overflow-x-auto">
                    {row.education}
                  </td>
                  <td className="py-5 px-4 border-b border-gray-900 border-r text-center  max-w-[100px]  overflow-x-auto">
                    {row.institutionName}
                  </td>
                  <td className="py-5 px-4 border-b border-gray-900 border-r text-center  max-w-[100px]  overflow-x-auto">
                    {row.universityName}
                  </td>
                  <td className="py-5 px-4 border-b border-gray-900 border-r text-center  max-w-[100px]  overflow-x-auto">
                    {row.degree}
                  </td>
                  <td className="py-5 px-4 border-b border-gray-900 border-r text-center  max-w-[100px]  overflow-x-auto">
                    {row.majors}
                  </td>
                  <td className="py-5 px-4 border-b border-gray-900 border-r text-center  max-w-[100px]  overflow-x-auto">
                    {row.yearOfPassing}
                  </td>
                  <td className="py-5 px-4 border-b border-gray-900 border-r text-center  max-w-[100px]  overflow-x-auto">
                    {row.certificationDate}
                  </td>
                  <td className="py-5 px-4 border-b border-gray-900 border-r text-center  max-w-[100px]  overflow-x-auto">
                    {row.percentage}
                  </td>
                  <td className="py-5 px-4 border-b border-gray-900 border-r text-center  max-w-[100px]  overflow-x-auto">
                    {row.state}
                  </td>
                  <td className="py-5 px-4 border-b border-gray-900 border-r text-center  max-w-[100px]  overflow-x-auto">
                    {row.country}
                  </td>
                  <td className="py-5 px-4 border-b border-gray-900 border-r text-center  max-w-[100px]  overflow-x-auto">
                    {row.attachment}
                  </td>
                  <td className="py-5 px-4 border-b border-gray-900 border-r   max-w-[100px]  overflow-x-auto text-center">
                    <div className="flex flex-row justify-center">
                      <TiPencil
                        className="inline-block mr-4 cursor-pointer text-lg"
                        onClick={() => handleOpenPopup(index)}
                      />
                      {index !== 0 && (
                        <RiDeleteBin6Line
                          className="inline-block cursor-pointer "
                          onClick={() => handleDelete(index)}
                        />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-200 w-3/4 h-auto border-2 p-4 rounded-md relative">
              <div className="flex items-center justify-between mb-4 bg-orange-500 m-2 rounded-lg">
                <h2 className="p-1 m-1 text-xl">
                  {editIndex !== null
                    ? "Edit education Details"
                    : "Add education Details"}
                </h2>
                <MdCancelPresentation
                  className="text-xl mr-2 cursor-pointer"
                  onClick={handleClosePopup}
                />
              </div>
              <form
                onSubmit={handleFormSubmit}
                onKeyDown={handleEnter}
                className="text-left rounded-lg"
              >
                <div className="grid grid-cols-4 gap-4 p-4">
                  <div>
                    <label
                      htmlFor="education"
                      className="mb-1 text-gray-700 font-medium"
                    >
                      education
                    </label>
                    <select
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300  p-2 rounded"
                    >
                      <option value="">Select education</option>
                      {educationOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.education && (
                      <p className="text-red-500 text-xs">{errors.education}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="institutioName"
                      className="mb-1 text-gray-700 font-medium"
                    >
                      {educationLabel.institutionName}
                    </label>
                    <input
                      type="text"
                      name="institutionName"
                      value={formData.institutionName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300  p-2 rounded"
                    />
                    {errors.institutionName && (
                      <p className="text-red-500 text-xs">
                        {errors.institutionName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="universityName"
                      className="mb-1 text-gray-700 font-medium"
                    >
                      {educationLabel.universityName}
                    </label>
                    <input
                      type="text"
                      name="universityName"
                      value={formData.universityName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300  p-2 rounded"
                    />
                    {errors.universityName && (
                      <p className="text-red-500 text-xs">{errors.universityName}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="degree"
                      className="mb-1 text-gray-700 font-medium"
                    >
                      {educationLabel.degree}
                    </label>
                    <input
                      type="text"
                      name="degree"
                      value={formData.degree}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300  p-2 rounded"
                    />
                    {errors.degree && (
                      <p className="text-red-500 text-xs">{errors.degree}</p>
                    )}
                  </div> 
                  <div>
                    <label
                      htmlFor="majors"
                      className="mb-1 text-gray-700 font-medium"
                    >
                      {educationLabel.majors}
                    </label>
                    <input
                      type="text"
                      name="majors"
                      value={formData.majors}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300  p-2 rounded"
                    />
                    {errors.majors && (
                      <p className="text-red-500 text-xs">{errors.majors}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="yearOfPassing"
                      className="mb-1 text-gray-700 font-medium"
                    >
                      Year of Passing
                    </label>
                    <input
          type="text"
          name="yearOfPassing"
          value={formData.yearOfPassing}
          onChange={handleYearChange}
         
          className="mt-1 block w-full border border-gray-300 p-2 rounded"
          placeholder={`${minYear} - ${currentYear}`}
        />
        {errors.yearOfPassing && (
          <p className="text-red-500 text-sm mt-1">{errors.yearOfPassing}</p>
        )}
                
                  </div>
                  <div>
                    <label
                      htmlFor="certificationDate"
                      className="mb-1 text-gray-700 font-medium"
                    >
                      Certificate Issue Date
                    </label>
                    <input
                      type="date"
                      name="certificationDate"
                      value={formData.certificationDate}
                      max={new Date().toISOString().split("T")[0]}
                      min={new Date(new Date().setFullYear(new Date().getFullYear() - 100)).toISOString().split("T")[0]}
                      onKeyDown={handleCertification}
                      className="mt-1 block w-full border border-gray-300  p-2 rounded"
                    />
                    {errors.certificationDate && (
                      <p className="text-red-500 text-xs">
                        {errors.certificationDate}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="percentage"
                      className="mb-1 text-gray-700 font-medium"
                    >
                      Percentage/Grade
                    </label>
                    <input
                      type="text"
                      name="percentage"
                      maxLength={4}
                      value={formData.percentage}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300  p-2 rounded"
                    />
                    {errors.percentage && (
                      <p className="text-red-500 text-xs">
                        {errors.percentage}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="state"
                      className="mb-1 text-gray-700 font-medium"
                    >
                      state
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300  p-2 rounded"
                    />
                    {errors.state && (
                      <p className="text-red-500 text-xs">{errors.state}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="mb-1 text-gray-700 font-medium"
                    >
                      country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300  p-2 rounded"
                    />
                    {errors.country && (
                      <p className="text-red-500 text-xs">{errors.country}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="attachment"
                      className="mb-1 text-gray-700  font-medium"
                    >
                      attachment
                    </label>
                    <input
                      type="file"
                      name="attachment"
                      onChange={(e) =>
                        setFormData((prevData) => ({
                          ...prevData,
                          attachment: e.target.files[0]?.name || "",
                        }))
                      }
                      className="mt-1 block w-full border border-gray-300 rounded"
                    />
                    {errors.attachment && (
                      <p className="text-red-500 text-xs">
                        {errors.attachment}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-end mt-4 ">
                    <div>
                    <button
                      type="submit"
                      className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mr-3 mb-2"
                      
                    >
                      Save
                    </button>
                    </div>
                    <div>
                    <button
                      onClick={handleClosePopup}
                      className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mb-2"
                    >
                      Cancel
                    </button>
                    </div>
                  </div>

                 
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lakshman;


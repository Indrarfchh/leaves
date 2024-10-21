import React, { useState ,useEffect} from "react";

// const id="HRMS1";
const PayrollSection = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  

  const [formData, setFormData] = useState({
    EmployeeInfo: { employeeID: "", employeeName: "", department: "", jobTitle: "", location: "" },
    SalaryDetails: { basicPay: "", netpay: "", grosspay: "",payfrequency:"", providentfund:"",professionaltax:"",insurance:""},
    TaxDeducations:{federaltax:"",statetax:"",localtax:""},
    Earnings: { bonus: "", overtimepay: "", incentives: "" },
    BankDetails: { bankname: "", bankaccountnumber: "", branch: "", nameasperthebankaccount: "", ifsccode: "",passbook:"",pancard:"" },
    PayrollDetails: { payrollperiod: "", payslipid: "", dateofjoining: "", form16: "" },
  });

  const [popupData, setPopupData] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});
  const [bankDetailsList, setBankDetailsList] = useState([]); 
  const [earningsList, setEarningsList] = useState([]);
  const [employeeId, setEmployeeId] = useState(null);


  const preventManualInput = (e) => {
    if(e.key){
    e.preventDefault();}
  };

  const sections = {
    EmployeeInfo: [
      { name: "employeeID", label: "Employee ID", validation: /^[a-zA-Z0-9]*$/, minLength: 1, maxLength: 20, errorMessage: "Employee ID must be alphanumeric." },
      { name: "employeeName", label: "Employee Name", type:"text",validation: /^[a-zA-Z\s]*$/, minLength: 1, maxLength: 20, errorMessage: "Employee Name should only contain letters." },
      { name: "department", label: "Department", type:"text",validation: /^[a-zA-Z\s]*$/, minLength: 1, maxLength: 20, errorMessage: "Department must contain only letters." },
      { name: "jobTitle", label: "Job Title",type:"text", validation: /^[a-zA-Z\s]*$/, minLength: 1, maxLength: 20, errorMessage: "Job Title must contain only letters." },
      { name: "location", label: "Location", type:"text",validation: /^[a-zA-Z\s]*$/, minLength: 1, maxLength: 20, errorMessage: "Location must contain only letters." },
    ],
    SalaryDetails: [
      { name: "basicPay", label: "Basic Pay", validation: /^[0-9]*$/, minLength: 1, maxLength: 10, errorMessage: "Basic Pay must contain only numbers." },
      { name: "netpay", label: "Net Pay", validation: /^[0-9]*$/, minLength: 1, maxLength: 10, errorMessage: "Net Pay must contain only numbers." },
      { name: "grosspay", label: "Gross Pay", validation: /^[0-9]*$/, minLength: 1, maxLength: 10, errorMessage: "Gross Pay must contain only numbers." },
      { name:"payfrequency", label: "Pay Frequency", validation: /^[0-9]*$/, minLength: 1, maxLength: 10,errorMessage: "Pay Frequency must contain only numbers." },
      { name:"providentfund",label: "Provident Fund", validation: /^[0-9]*$/, minLength: 1, maxLength: 10,errorMessage: "Provident Fund must contain only numbers." },
      { name:"professionaltax",label: "Professional Tax", validation: /^[0-9]*$/,minLength: 1, maxLength: 10, errorMessage: "Professional Taxmust contain only numbers." },
      { name:"insurance", label: "Insurance", validation: /^[0-9]*$/,minLength: 1, maxLength: 10,errorMessage: "Insurance must contain only numbers." },
      { name:"federaltax", label: "Federal Tax", validation: /^[0-9]*$/, minLength: 1, maxLength: 10,errorMessage: " Federal Tax must contain only numbers." },
      { name:"statetax",label: "State Tax", validation: /^[0-9]*$/, minLength: 1, maxLength: 10,errorMessage: "State Tax must contain only numbers." },
      { name:"localtax",label: "Local tax", validation: /^[0-9]*$/,minLength: 1, maxLength: 10, errorMessage: "Local Tax must contain only numbers." }, 
    ],
    BankDetails: [
      { name: "bankaccountnumber", label: "Bank Account Number", validation: /^[0-9]*$/, minLength: 1, maxLength: 20, errorMessage: "Bank Account Number must be 10-20 digits long." },
      { name: "bankname", label: "Bank Name", type:"text",validation: /^[a-zA-Z\s]*$/, minLength: 1, maxLength: 20, errorMessage: "Bank Name should contain only letters." },
      { name: "branch", label: "Branch", type:"text",validation: /^[a-zA-Z\s]*$/, minLength: 1, maxLength: 20, errorMessage: "Branch must contain only letters." },
      { name: "nameasperthebankaccount", label: "Name As Per The Bank Account",type:"text", minLength: 1, maxLength: 20, validation: /^[a-zA-Z\s]*$/, errorMessage: "Name should only contain letters." },
      { name: "ifsccode", label: "IFSC Code", validation: /^[A-Z]{4}0[A-Z0-9]{6}$/, minLength: 1, maxLength: 11, errorMessage: "IFSC Code must be in the format: 4 letters, 0, and 6 alphanumeric characters(SBIN0000300)." },
      { name: "passbook", label:"Passbook/Cheque Photo",validation: /\.(png|jpg|pdf)$/i, type: "file", errorMessage: "Only .png, .jpg, and .pdf files are allowed." },
      { name: "pancard", label:"Pancard Photo",validation: /\.(png|jpg|pdf)$/i, type: "file", errorMessage: "Only .png, .jpg, and .pdf files are allowed." },
    ],
    PayrollDetails: [
      { name: "payrollperiod", label: "Payroll Period", validation: /^[0-9]*$/,minLength: 1, maxLength: 20, errorMessage: "Payroll Period must contain only numbers." },
      { name: "payslipid", label: "Payslip ID", validation: /^[a-zA-Z0-9]*$/, minLength: 1, maxLength: 20,errorMessage: "Payslip ID must be alphanumeric." },
      { name: "dateofjoining", label: "Date of Joining", validation: null, type: "date",errorMessage: "" },
      { name: "form16", label:"Form 16", type: "file", errorMessage: "Only .png, .jpg, and .pdf files are allowed." },
    ],
    Earnings:[
      { name:"bonus", label: "Bonus-By project/By year", validation: /^[0-9]*$/, minLength: 1, maxLength: 10,errorMessage: " Bonus-By project/By year must be 1-20 characters." },
      { name:"overtimepay", label: "Over time pay", validation: /^[0-9]*$/, minLength: 1, maxLength: 10,errorMessage: " Over time pay must be 1-20 characters." },
      { name:"incentives", label: "Incentives", validation: /^[0-9]*$/, minLength: 1, maxLength: 10,errorMessage: "Incentives must be 1-20 characters." },
    ],
  };

  useEffect(() => {
    const id='HRMS1';
    const fetchData = async () => {
      const bankDetails = await fetchBankDetails(id)
;
      setEmployeeId(bankDetails.employeeId);
      setBankDetailsList(bankDetails);
      const earnings = await fetchEarnings(id)
;
      setEmployeeId(earnings.employeeId);
      setEarningsList(earnings);
    };

    fetchData();
  }, []);

  const openPopup = (section) => {
    setCurrentSection(section);
    setPopupVisible(true);
    setFieldErrors({});
    setPopupData({ ...formData[section] }); 
  };

  const closePopup = () => {
    setPopupVisible(false);
    setCurrentSection(null);
    
  };

  const handleInputChange = (e, field, fieldCriteria) => {
    const isFile = fieldCriteria.type === "file";
    let value = isFile ? e.target.files[0] : e.target.value;
  
    // Step 1: File validation (if applicable)
    if (isFile) {
      if (!isValidFile(value)) {
        setFieldErrors({
          ...fieldErrors,
          [field]: "Only .png, .jpg, and .pdf files are allowed.",
        });
        return;
      }
    } else {
      // Step 2: Apply trim if it's a text field
      if (fieldCriteria.type === "text") {
        value = value.trim();
      }
  
      // Step 3: Apply validation pattern (if provided, like regex for numbers, alphanumeric, etc.)
      if (fieldCriteria.validation && !isFile) {
        // Use the validation pattern defined in fieldCriteria
        if (!fieldCriteria.validation.test(value)) {
          setFieldErrors({
            ...fieldErrors,
            [field]: fieldCriteria.errorMessage || "Invalid input format.",
          });
          return;
        }
      }
    }
  
    // Step 4: Validate the field using custom validation logic (if any)
    const error = isFile ? "" : validateField(value, fieldCriteria);
  
    // Step 5: Update state
    setFieldErrors({ ...fieldErrors, [field]: error });
    setPopupData({ ...popupData, [field]: value });
  };
  
  
  const isValidFile = (file) => {
    const allowedExtensions = /\.(png|jpg|pdf)$/i;
    return allowedExtensions.test(file.name);
  };
  
 const applyValidationPattern = (value, pattern) => {
  value = value.trim(); // Trim leading and trailing spaces
  if (!pattern) return value;

  // Updated to remove leading and trailing spaces directly in the regex
  if (pattern.source === "^[0-9]*$") {
    return value.replace(/[^0-9]/g, "");
  } else if (pattern.source === "^[a-zA-Z]*$") {
    return value.replace(/[^a-zA-Z\s]/g, "");
  } else if (pattern.source === "^[a-zA-Z0-9]*$") {
    return value.replace(/[^a-zA-Z0-9]/g, "");
  }
  return value; 
};

  
  const validateField = (value, criteria) => {
    if (!criteria) return ""; 
  
    if (typeof value !== 'string') return ""; 
  
    if (!value) {
      return "This field does not accept spaces";
    } else if (criteria.validation && !criteria.validation.test(value)) {
      return criteria.errorMessage;
    } else if (value.length < criteria.minLength) {
      return `Minimum length is ${criteria.minLength} characters.`;
    } else if (value.length > criteria.maxLength) {
      return `Maximum length is ${criteria.maxLength} characters.`;
    }
  
    return ""; 
  };
  
  const handleSave = async () => {
    let errors = {};
  
    sections[currentSection].forEach((field) => {
      const value = popupData[field.name];
      let error = "";
  
      if (!value) {
        error = `${field.label} is required.`;
      } else if (typeof value === 'string' && field.validation && !field.validation.test(value)) {
        error = field.errorMessage;
      } else if (typeof value === 'string' && value.length < field.minLength) {
        error = `Minimum length is ${field.minLength} characters.`;
      } else if (typeof value === 'string' && value.length > field.maxLength) {
        error = `Maximum length is ${field.maxLength} characters.`;
      }else if (field.type === "file" && !isValidFile(value)) { 
        error = "Only .png, .jpg, and .pdf files are allowed.";
      }
  
      if (error) {
        errors[field.name] = error;
      }
    });
  
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
    } else {
      try {
        if (currentSection === "BankDetails") {
          const bankData = {
            ...popupData,
            employeeId: employeeId, 
          };
          if (popupData.id) {
            await updateBankDetails(popupData.id, bankData);
          } else {
            await createBankDetails(popupData);
          }
          const updatedBankDetails = await fetchBankDetails(); 
          setBankDetailsList(updatedBankDetails);
        } else if (currentSection === "Earnings") {
          const earningsData = {
            ...popupData,
            employeeId: employeeId, 
          };
  
          if (popupData.id) {
            await updateEarnings(popupData.id, earningsData);
          } else {
            await createEarnings(earningsData);
          }
          const updatedEarnings = await fetchEarnings();
          setEarningsList(updatedEarnings);
        }
  
        setFormData({
          ...formData,
          [currentSection]: popupData,
        });
        console.log("Form Data Saved:", popupData);
        setPopupData({});
        closePopup();
      } catch (error) {
        console.error("Error saving data:", error);
      }
    }
  };
  
  const handleDelete = async (section, id) => {
    try {
      if (section === "BankDetails") {
        await deleteBankDetails(id)
;
        const updatedBankDetails = await fetchBankDetails(); 
        setBankDetailsList(updatedBankDetails);
      } else if (section === "Earnings") {
        await deleteEarnings(id)
;
        const updatedEarnings = await fetchEarnings(); 
        setEarningsList(updatedEarnings);
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };


  return (
    <div className=" mr-48 ml-48">
      <h2 className="text-xl text-center mb-4 font-bold p-1 bg-[#146a7d]">Payroll Section</h2>
      <div className="grid grid-cols-3 gap-8 p-10">
        {Object.keys(sections).map((sectionKey) => (
          <div key={sectionKey} className="p-4  rounded-xl bg-gray-200 shadow cursor-pointer hover:shadow-lg" onClick={() => openPopup(sectionKey)}>
            <h3 className="text-xl font-bold mb-2 ">{sectionKey.replace(/([A-Z])/g, " $1").trim()}</h3>
            {sections[sectionKey].slice(0, 3).map((field, index) => (
              <p key={index}>
                <strong>{field.label}:</strong> {formData[sectionKey][field.name] || " "}
              </p>
            ))}
          </div>
        ))}
      </div>

      {popupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded shadow-lg">
          <div className="bg-gray-300  rounded-lg shadow-lg w-11/12 sm:w-3/4 lg:w-1/2">
            <h2 className="text-xl mb-4 w-full p-1 flex items-center  text-white justify-center bg-[#146a7d]  rounded shadow-lg">{currentSection.replace(/([A-Z])/g, " $1").trim()}</h2>
            <div className="grid grid-cols-3 gap-6 p-5 mb-4 ">
            {sections[currentSection].map((field, index) => (
              <div key={index} >
                <label className="block ">{field.label}:</label>
                <input
                   type={field.type === "file" ? "file" : field.type === "date" ? "date" : field.type === "text" ? "text": undefined}
                   accept={field.type === "file" ? ".png,.jpg,.pdf" : undefined} 
                   minLength={field.type === "text" ? field.minLength || "" : undefined} 
                   maxLength={field.type === "text" ? field.maxLength || "" : undefined}
                   value={field.type === "file" ? undefined : popupData[field.name] || ""} 
                   onChange={(e) => handleInputChange(field.name, e, field.type === "file")}
                   onKeyDown={field.type === "date" ? preventManualInput : ""} 
                    className="w-full p-1 border border-gray-300 rounded-lg"
                />
                {fieldErrors[field.name] && <p className="text-red-600 text-sm mt-1">{fieldErrors[field.name]}</p>}
              </div>
            ))}
            </div>
            <div className="mt-5 mb-5 mr-5 flex justify-end space-x-4">
              <button onClick={handleSave} className="border border-black bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 ">
                Save
              </button>
              <button onClick={closePopup} className="border border-black bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 ">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayrollSection;
import React, { useState } from 'react';

const CollegeNameForm = () => {
  const [collegeName, setCollegeName] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setCollegeName(value);
    
    // Check if the value has leading spaces
    if (value.trim() !== value) {
      setError('Leading spaces are not allowed.');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the trimmed value
    if (collegeName.trim() === '') {
      setError('College name cannot be empty or have leading spaces.');
    } else {
      setError('');
      // Proceed with form submission
      console.log('College Name:', collegeName.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="collegeName">College Name</label>
        <input
          type="text"
          id="collegeName"
          value={collegeName}
          onChange={handleInputChange}
          placeholder="Enter college name"
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CollegeNameForm;

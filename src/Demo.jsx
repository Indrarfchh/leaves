import React, { useState } from 'react';

function Demo() {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [error, setErrors] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission and page refresh

    const newError = {};

    if (!data.email) {
      newError.email = 'Required Email';
    }
    if (!data.password) {
      newError.password = 'Required Password';
    }

    if (Object.keys(newError).length > 0) {
      setErrors(newError);
      return;
    }

    // Continue with form submission logic if no errors
  };

  return (
    <div className='flex flex-row justify-center'>
      <form onSubmit={handleSubmit} className='border-2 border-solid inline-block p-5 rounded-lg bg-orange-500'>
        <h1 className='text-2xl text-center underline'>Log In</h1>

        {/* Email Input */}
        <div className='m-2'>
          <label className=''>User Name</label>
          <input
            name='email'
            value={data.email}
            onChange={handleChange}
            className='w-full'
            type='text'
          />
          {error.email && <p className='text-red-500'>{error.email}</p>}
        </div>

        {/* Password Input */}
        <div>
          <label className=''>Password</label>
          <input
            name='password'
            value={data.password}
            onChange={handleChange}
            className='w-full'
            type='password'
          />
          {error.password && <p className='text-red-500'>{error.password}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button className='bg-green-500' type='submit'>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Demo;

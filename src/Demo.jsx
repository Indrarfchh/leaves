import React, { useState } from 'react';

function Demo() {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [error, setErrors] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    if(name === "email" && value.includes(" ")){
    setErrors((prevErr)=>({
      ...prevErr,email:"no spaces are allowed"
    }))
    }
    //setData((prevData)=>({...prevData,[e.target.name]:e.target.value}))
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission and page refresh

    const newError = {};

    if (!data.email) {
      newError.email = 'Required Name';
    } else if (!/^[A-Za-z]+(\s[A-Za-z]+)*$/.test(data.name)) {
      newError.email = "Only letters and spaces allowed, and must start with a letter";
    }else if(data.email.includes(" ").length>1){
      newError.email = "not allowed spaces"
    }
  
    
   
    if (!data.password) {
      newError.password = 'Required Password';
    } else if (data.password.includes(' ')) {
      newError.password = "No spaces allowed";
    } else if (!/^[A-Za-z]+$/.test(data.password)) {
      newError.password = "Only letters are allowed";
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

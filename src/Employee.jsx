import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { BiSolidFileExport } from "react-icons/bi";

function Employee() {
  return (
    <div className='mt-5 ml-48 mr-48'>
    <div className='flex flex-row justify-between mb-3 border-2 border-solid px-4 py-2'>
    <h1>Aravind Boyini RS0015</h1>
    <div className='flex flex-row '>
    <input className='rounded-lg px-2' type = "text" placeholder='search'/>
    <IoIosSearch className='m-2'/>
    </div>
    <div >
    <button className='bg-gray-400 px-3 flex flex-row items-center'>Export <span><BiSolidFileExport /></span></button>
    </div>
    </div>
    <div className='flex justify-center'>
    <table className='px-4 py-2 text-center'>
    <thead>
    <tr className='border-2'>
    <th className=' border-solid px-4 py-2'>Employee Name</th>
    <th className=' border-solid  px-4 py-2'>Employee Id</th>
    <th className=' border-solid  px-4 py-2'>Designation</th>
    <th className=' border-solid  px-4 py-2'>View</th>
    </tr>
    </thead>
    <tbody>
    <tr className='border-2 px-4 py-2'>
    <td className='px-20'>Aravind</td>
    <td className='px-20' >RS0015</td>
    <td className='px-20'>Front-end</td>
    <td className='px-8'><button className='bg-blue-700 px-3 py-1 text-white m-2'>View</button></td>
    </tr>
    </tbody>
    <tbody>
    <tr className='border-2 px-4 py-2'>
    <td>Aravind</td>
    <td>RS0015</td>
    <td>Front-end</td>
    <td><button className='bg-blue-700 px-3 py-1 text-white m-2'>View</button></td>
    </tr>
    </tbody>
    <tbody>
    <tr className='border-2 px-4 py-2'>
    <td>Aravind</td>
    <td>RS0015</td>
    <td>Front-end</td>
    <td><button className='bg-blue-700 px-3 py-1 text-white m-2'>View</button></td>
    </tr>
    </tbody>
    <tbody>
    <tr className='border-2 px-4 py-2'>
    <td>Aravind</td>
    <td>RS0015</td>
    <td>Front-end</td>
    <td><button className='bg-blue-700 px-3 py-1 text-white m-2'>View</button></td>
    </tr>
    </tbody>
    <tbody>
    <tr className='border-2 px-4 py-2'>
    <td>Aravind</td>
    <td>RS0015</td>
    <td>Front-end</td>
    <td><button className='bg-blue-700 px-3 py-1 text-white m-2'>View</button></td>
    </tr>
    </tbody>
    <tbody>
    <tr className='border-2 px-4 py-2'>
    <td>Aravind</td>
    <td>RS0015</td>
    <td>Front-end</td>
    <td><button className='bg-blue-700 px-3 py-1 text-white m-2'>View</button></td>
    </tr>
    </tbody>
    <tbody>
    <tr className='border-2 px-4 py-2'>
    <td>Aravind</td>
    <td>RS0015</td>
    <td>Front-end</td>
    <td><button className='bg-blue-700 px-3 py-1 text-white m-2'>View</button></td>
    </tr>
    </tbody>
    <tbody>
    <tr className='border-2 px-4 py-2'>
    <td>Aravind</td>
    <td>RS0015</td>
    <td>Front-end</td>
    <td><button className='bg-blue-700 px-3 py-1 text-white m-2'>View</button></td>
    </tr>
    </tbody>
    </table>
    </div>

    
    </div>
  )
}

export default Employee
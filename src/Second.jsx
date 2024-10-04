import React from 'react'
import { FaHome } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { IoKey } from "react-icons/io5";
import { MdSpeakerNotes } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";
import { FaBookReader } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";


function Second() {
  return (
    <div className='ml-48 mr-48 mt-5'>
    <div className='border-2 border-solid flex flex-row items-center p-2'>
    <FaHome />
    <h1 className='m-1'>Home</h1>
    </div>
    <div className='flex flex-row justify-between px-1 py-2'>
    <div className='flex flex-row items-center'>
    <BiTargetLock />
    <h1 className='text-blue-500'>My Goals</h1>
    </div>
    <div className='flex flex-row'>
    <h1>Boyineni Aravind(RS00015)<br/><span>Front-end Developer</span></h1>
    <button className='rounded-full border-2 border-solid'>ddddd</button>
    </div>
    </div>
    <div className='bg-orange-600 px-4 py-2'>
    <div className='flex flex-row'>
    <h1>GoalFor</h1>
    <div className='ml-5'>
    <select>
    <option>H124</option>
    <option>H224</option>
    </select>
    </div>
    </div>
    <div className='flex flex-row  bg-gray-400 p-5 mt-3'>
    
    <h1>Section2</h1>
    <div className='px-80 flex flex-row items-center'>
    <IoKey />
    <p >Key roles outcome <br/> </p>
    </div>
    
    </div>
    <div className='flex justify-around rounded-lg bg-white w-100 mt-3'>
    <div className='bg-white border-2 border-solid border-black inline-block p-5 m-3'>
    <h1>Development <br/>Delete Managment</h1>
    <div className='flex flex-row items-center'>
    <MdSpeakerNotes />
    <span>Notes(0)</span>
    </div>
    </div>
    <div className='bg-white border-2 border-solid border-black inline-block p-5 m-3'>
    <h1>Development <br/>Delete Managment</h1>
    <div className='flex flex-row items-center'>
    <MdSpeakerNotes />
    <span>Notes(0)</span>
    </div>
    </div>
    <div className='bg-white border-2 border-solid border-black inline-block p-5 m-3'>
    <h1>Development <br/>Delete Managment</h1>
    <div className='flex flex-row items-center'>
    <MdSpeakerNotes />
    <span>Notes(0)</span>
    </div>
    </div>
    </div>
    <div className='flex flex-row  bg-gray-400 p-5 mt-3'>
    
    <h1>Section3</h1>
    <div className='px-80 flex flex-row items-center'>
    <GrDeliver />
    <p >Delevarables </p>
    </div>
    </div>
    <div className='bg-white px-4  flex flex-row justify-between py-11'>
    <h1>CCA Goals <br/>complete</h1>
    <div className='flex flex-row items-center'>
    <FaBookReader />
    <p>Complted by:17/09/2024<br/>status:in Progress</p>
    </div>
    </div>
    <div className='flex flex-row items-center border-2 border-solid mt-2 px-4 py-3 bg-white'>
    <MdAddCircle />
    <h1 className='ml-1'>New Delevarables2</h1>
    </div>
    <div className='flex flex-row items-center border-2 border-solid mt-2 px-4 py-3 bg-white'>
    <MdAddCircle />
    <h1 className='ml-1'>New Delevarables2</h1>
    </div>
    <div className='flex flex-row items-center border-2 border-solid mt-2 px-4 py-3 bg-white'>
    <MdAddCircle />
    <h1 className='ml-1'>New Delevarables2</h1>
    </div>
    <div className='flex flex-row mt-2 items-center justify-between border-2 bg-white border-solid'>
    <h1 className='px-3 py-2'>Manager Comments</h1>
    <div className='flex flex-row'>
    <MdOutlineModeEditOutline />
    <MdDelete />
    </div>
    </div>
    <div className='border-2 border-solid px-4 py-24 bg-gray-400'>
    
    </div>
    </div>
    
    </div>
  )
}

export default Second
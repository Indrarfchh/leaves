import React, { useState } from 'react'

function LeavesMaster() {
    const [data,setData] = useState({
        leaveName:"",
        noOfLeavesPerMonth:"",
        decription:""
    })
    const [error,setError] = useState([])

const [addLeave,setAddLeave] = useState(false)
const handleLeave = ()=>{
    setAddLeave(true)
}

const handleSubmit = ()=>{
    newerrors = []
    if(!data){
        newerrors.data.map(()=>{
            `${keys} = ${name} required`
        })

    }

}

const handleChange = (e)=>{
    const {name,value} = e.target;

    setData((preData)=>({
        ...preData,[name]:value
    }))

}
  return (
    <div>
        <div className='mt-8 ml-8'>
    <h1>Leave Types <br/><button onClick={handleLeave}  className='bg-blue-500 px-4 py-2'>Add Leave</button></h1>
    {addLeave && <div>
        <div className='flex flex-row justify-center px-0'>
        <form onSubmit = {handleSubmit} className='inline-block border-2 border-black p-5 space-y-4'>
        <div className='flex flex-col'>
        <label>Leave Name</label>
        <input maxLength={10} pattern="^[A-Za-z\s]+$" className='border-2 border-black' onChange={handleChange}    type = "text"/>
        </div>
        <div className='flex flex-col'>
        <label>Number Of leaves Per Month</label>
        <input className='border-2 border-black' onChange={handleChange}  type = "text"/>
        </div>
        <div className='flex flex-col'>
        <label>Description</label>
        <input className='border-2 border-black' onChange={handleChange}  type = "text"/>
        </div>
        </form>
        </div>
        </div>}
    
    </div>
    </div>
  )
}

export default LeavesMaster
"use client"

import React, { useState } from 'react'

const page = () => {
const [title, settitle] = useState("")
const [desc, setdesc] = useState("")
const [mainTask, setmainTask] = useState([])

const sumbitHandler = (e) => {
  e.preventDefault()
setmainTask([...mainTask,{title , desc}]);
  setdesc("")
  settitle("")
  console.log(mainTask)

};

const deleteHandler = (i) =>{
let copyTask = [...mainTask]
copyTask.splice(i,1)
setmainTask(copyTask)
}
  var renderTask = <h2>No Task Available</h2>

if(mainTask.length > 0){
  renderTask = mainTask.map((t,i)=>{
    return(
      <li key={i} className='flex items-center justify-between mb-6'>
      <div className='flex justify-between  w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h5 className='text-2xl font-semibold'>{t.desc}</h5>
    </div>
    <button onClick={()=>{
      deleteHandler(i)
    }}
     className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
    </li>
    );
   
  });
}
  


  return (
   <>
   <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Sukrut Todo List</h1>
    <form onSubmit={sumbitHandler}>
      <input type="text" className='border-4 text-2xl m-8 px-5 py-2 border-zinc-400' placeholder='Enter task here' 
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
      <input type="text" className='border-4 text-2xl m-8 px-5 py-2 border-zinc-400' placeholder='Description'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }} />
      <button className='bg-black text-white px-8 py-3 rounded-2xl font-bold text-2xl m-5'>Add Task</button>
    </form>
    <hr />
    <div className=' bg-slate-400 p-14'>
     <ul>{renderTask}</ul> 
    </div>
   </>
  )
}

export default page

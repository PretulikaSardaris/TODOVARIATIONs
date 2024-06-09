import React, { useState } from 'react';

// Function declaration
const StateTodo = () => {
     const [tasks, setTasks ]=useState([]);
     const [taskInput, setTaskInput ]=useState('');



     const addTask = (task) => {
      if(taskInput.trim() !== ''){
        setTasks([...tasks , {text:taskInput , status: 'pending'}]);
       
        setTaskInput('')
      }
      
     }
  return (
    <div className='flex flex-col items-center justify-center'>
     <div className='flex gap-10 border-black rounded-md'><input className='bg-slate-100 border-black rounded-md p-5 m-5' type="text" onChange={(e) => {
     setTaskInput(e.target.value)
     }} 
     onKeyDown={(e) => {
      if(e.key === 'Enter'){
        addTask()
      }
     }}/>
     <button className='bg-blue-600 p-5 m-5 rounded-md' onClick={addTask}>Add</button>
     </div>

     <div className='flex gap-10 p-5 m-5'>
     <ul>
        {tasks.map((task , index) => (
          <div className='flex gap-10 border-black rounded-md'>
            <li className='bg-slate-100 border-black rounded-md p-3 mb-2 flex justify-between items-center' key={index}>
              <span className='bg-slate-100 border-black rounded-md p-5 m-5 font-bold text-black text-xl'>{task.text} </span>
            
           <div className='flex flex-row gap-5' key={index}><button className='bg-green-600 p-5 m-5 rounded-md'>Done</button>
           <button className='bg-purple-600 p-5 m-5 rounded-md'>Pending</button>
           <button className='bg-red-600 p-5 m-5 rounded-md'>Delete</button></div> </li></div>
        ))}
     </ul>
     </div>
    </div>
  );
};

// Export the function as default
export default StateTodo;

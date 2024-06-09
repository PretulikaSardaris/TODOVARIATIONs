import React, { useState } from 'react';

// Function declaration
const StateTodo = () => {
     const [tasks, setTasks ]=useState([]);

     const addTask = (task) => {
     setTasks([...tasks , task])
        console.log(task)
     }
  return (
    <div className='flex flex-col items-center justify-center'>
     <div className='flex gap-10 border-black rounded-md'><input className='bg-slate-100 border-black rounded-md p-5 m-5' type="text" onKeyDown={(e) => {
   if(e.key === 'Enter') {
    addTask({Text:e.target.value});
    e.target.value = ''
   }
     }} />
     <button className='bg-green-600 p-5 m-5 rounded-md' onClick={addTask}>Add</button>
     </div>

     <div className='flex gap-10 p-5 m-5'>
     <ul>
        {tasks.map((task , index) => (
            <li key={index}>{task.text} 
            <button>Delete</button></li>
        ))}
     </ul>
     </div>
    </div>
  );
};

// Export the function as default
export default StateTodo;

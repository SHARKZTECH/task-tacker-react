import './App.css';
import { useState,useEffect } from 'react'

import Header from './Header';
import Tasks from './Tasks';
import Addtask from './Addtask';
import Footer from './Footer';
import About from './About';

function App() {
  const [showAddTask,setshowAddTask]=useState(false)
  const [tasks,setTasks]=useState([ ])

  useEffect(()=>{
     const getTasks= async ()=>{
       const tasksFrmServer= await fetchtasks()
       setTasks(tasksFrmServer);
     }
     getTasks();
  },[])
  //fect tasks
  const fetchtasks= async ()=>{
    const res=await fetch("http://localhost:5000/tasks")
    const data =await res.json()
    return data;
  }
    //fect task
    const fetchtask= async (id)=>{
      const res=await fetch(`http://localhost:5000/tasks/${id}`)
      const data =await res.json()
      return data;
    }
//Add Task
const addTask= async (task)=>{
  const res=await fetch('http://localhost:5000/tasks',{
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(task),
  })  

  const data=await res.json()
  setTasks([...tasks,data]);
  // const id=Math.floor(Math.random()*10000)+1;
  // const newtask={id,...task};

  // setTasks([newtask,...tasks])
 
}
//Delete task
const deleteTask=async (id)=>{
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'DELETE'
  })
  setTasks(tasks.filter((task)=>task.id!==id))
}
//Toggle Reminder
const toggleReminder= async (id)=>{
  const taskToToggle= await fetchtask(id);
  const upToggle={...taskToToggle,reminder:!taskToToggle.reminder}

  const res=await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'PUT',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(upToggle),
  })
  const data= await res.json()

  setTasks(tasks.map((task)=>
    task.id===id ? {...task,reminder: data.reminder}:task
  ))
}
  return (
    <div  className="container">
      <Header onAdd={()=>setshowAddTask
      (!showAddTask)} showAdd={showAddTask} />
     {showAddTask && <Addtask onAdd={addTask}/>} 
     {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
     : 'No tasks !'} 
  
     <Footer/>
    </div>
  );
}

export default App;

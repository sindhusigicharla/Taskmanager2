import logo from './logo.svg';
import './App.css';
import Input from './Input';
import { useEffect, useMemo, useState } from 'react';
import Toggle from './Toggle';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([
  ])


  const [isLightMode, setIsLightMode] = useState(localStorage.getItem('isLightMode')==='true'? true:false);

  // Hw
  // From the local storage the data will be retrieved as json - {"theme": "true"} -> {theme: true}

  // CRUD
  // 1. Create or add
  // 2. Read or get
  // 3. Update -> Delete and Add again
  // 4. Delete or remove

  
 

  function addTask(task){
    const newTask = {
      id: new Date().toString(),
      description: task,
      status: false,
    }


    setTasks([...tasks, newTask])
    
  }



  function deleteTask(id){

    const newTasks = tasks.filter(task=>task.id!==id);
    setTasks(newTasks);

  }

  function updateTask(id){
      const newTasks = tasks.map((task)=>{
        if(task.id===id){
          return {...task, status: !task.status}
        }else{
          return task;
        }
        
      })

      setTasks(newTasks);
  }


  
  return (
    <div className={`App ${isLightMode?'light-bg':'dark-bg'}`}>
      <div className='container'>
          <Toggle isLightMode={isLightMode} setIsLightMode={setIsLightMode}/>
          <Input addTask={addTask}/>
          <TaskList tasks = {tasks} deleteTask={deleteTask} updateTask={updateTask}/>
      </div>
    </div>
  );
}

export default App;

// we will use call back to commucate from child to parent


// Steps to Install MUI
// 1. Run "npm install @mui/icons-material"
// 2. Run "npm install @mui/icons-material @mui/material @emotion/styled @emotion/react"



//1. How to apply CSS conditionally
//2. State uplift


// The data is propagating from App to TaskList to TaskItem to Button 10 levels and 20 different props

// Prop drilling - Passing the props from Parent to child and child to grand child etc
// You always should avoid this process otherwise your code will not managable

// There are two ways
// 1. Context api
// 2. Centraized storage system, eg: Redux, redux toolkit


// In next class we will cover, context api and memoization
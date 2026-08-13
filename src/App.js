import logo from './logo.svg';
import './App.css';
import Input from './Input';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import Toggle from './Toggle';
import TaskList from './TaskList';
import React from 'react';

export const ThemeContext = createContext();
export const TasksContext = createContext();

function App() {
  const [tasks, setTasks] = useState([
  ])


  const [isLightMode, setIsLightMode] = useState(localStorage.getItem('isLightMode')==='true'? true:false);

 
 

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

  const count = {count: 10}

  const buttonText = {
    text:'Add'
  }

  
  return (
    <div className={`App ${isLightMode?'light-bg':'dark-bg'}`}>
      <div className='container'>
          <ThemeContext.Provider value={{isLightMode, setIsLightMode}}>
                <Toggle/>
          </ThemeContext.Provider>

          <Input addTask={addTask}/>

          <TasksContext.Provider value={buttonText}>
                <TaskList tasks = {tasks} deleteTask={deleteTask} updateTask={updateTask}/>
          </TasksContext.Provider>
   
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


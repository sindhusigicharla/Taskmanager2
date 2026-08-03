import logo from './logo.svg';
import './App.css';
import Input from './Input';
import { useState } from 'react';
import Toggle from './Toggle';

function App() {
  const [tasks, setTasks] = useState([
    {id:1, description: "Task 1", status:true},
    {id:2, description: "Task 1", status:true},
  ])

  function addTask(task){
    const newTask = {
      id: new Date().toString(),
      description: task,
      status: true,
    }

    setTasks([...tasks, newTask])
    
  }

  
  return (
    <div className="App">
      <div className='container'>
          <Toggle/>
          <Input addTask={addTask}/>

      </div>
    </div>
  );
}

export default App;

// we will use call back to commucate from child to parent


// Steps to Install MUI
// 1. Run "npm install @mui/icons-material"
// 2. Run "npm install @mui/icons-material @mui/material @emotion/styled @emotion/react"
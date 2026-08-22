import logo from "./logo.svg";
import "./App.css";
import Input from "./Input";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import Toggle from "./Toggle";
import TaskList from "./TaskList";
import React from "react";

export const ThemeContext = createContext();
export const TasksContext = createContext();

function App() {
  const [tasks, setTasks] = useState([]);

  const url = "http://localhost:3000/tasks";

  const [isLightMode, setIsLightMode] = useState(
    localStorage.getItem("isLightMode") === "true" ? true : false,
  );

  useEffect(() => {
    getTasks();
  }, []);

  async function getTasks() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function addTask(task) {
    const newTask = {
      id: new Date().toString(),
      description: task,
      status: false,
    };

    try {
      const response = await fetch(url, {
        method: "POST",

        body: JSON.stringify(newTask),
      });
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      await getTasks();
    }
  }

  async function deleteTask(id) {
    // const newTasks = tasks.filter(task=>task.id!==id);
    // setTasks(newTasks);

    try {
      const reponse = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    } finally {
      getTasks();
    }
  }

  async function updateTask(id) {
    let task = tasks.find((task) => task.id === id);

    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ status: !task.status }),
      });
      const data = await response.json();
    } catch (error) {
      console.log(error);
    } finally {
      getTasks();
    }
  }

  const count = { count: 10 };

  const buttonText = {
    text: "Add",
  };

  return (
    <div className={`App ${isLightMode ? "light-bg" : "dark-bg"}`}>
      <div className="container">
        <ThemeContext.Provider value={{ isLightMode, setIsLightMode }}>
          <Toggle />
        </ThemeContext.Provider>

        <Input addTask={addTask} />

        <TasksContext.Provider value={buttonText}>
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
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

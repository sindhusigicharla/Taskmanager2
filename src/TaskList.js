import { useContext } from "react";
import TaskItem from "./TaskItem";
import { TasksContext } from "./App";

function TaskList(props){

    const {tasks, deleteTask, updateTask} = props;

    useContext(TasksContext)
    if(tasks.length==0){
        return <h1>No tasks are available</h1>
    }
    return(
        <div className="task-list">
            
            {tasks.map((task)=>  <TaskItem id={task.id} taskName={task.description} status ={task.status} deleteTask={deleteTask} updateTask={updateTask}/>
            )}
        </div>
    )
}

export default TaskList;


// 1. id
// 2. taskName
// 3. status
import TaskItem from "./TaskItem";

function TaskList(props){
    const {tasks, deleteTask} = props;
    return(
        <div className="task-list">
            {tasks.map((task)=>  <TaskItem id={task.id} taskName={task.description} status ={task.status} deleteTask={deleteTask}/>
            )}
        </div>
    )
}

export default TaskList;


// 1. id
// 2. taskName
// 3. status
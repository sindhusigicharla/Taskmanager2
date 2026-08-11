import Button from "./Button";

function TaskItem(props){

    const {id, taskName, status, deleteTask, updateTask} = props;

    function buttonClicked(){
        deleteTask(id);
    }
    return(
        <div className="task-item">
            <input type="checkbox" className="checkbox" checked={status} onChange={()=>updateTask(id)}/>
            <p className={`task ${status? 'task-completed':''}`}>{taskName}</p>
            <Button text={"Delete"} type={'delete'} operation={buttonClicked}/>
        </div>
    )
}

export default TaskItem;


// props are immutable
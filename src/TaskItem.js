import Button from "./Button";

function TaskItem(props){

    const {id, taskName, status, deleteTask} = props;

    function buttonClicked(){
        deleteTask(id);
    }
    return(
        <div className="task-item">
            <input type="checkbox" className="checkbox" value={status}/>
            <p className="task">{taskName}</p>
            <Button text={"Delete"} type={'delete'} operation={buttonClicked}/>
        </div>
    )
}

export default TaskItem;
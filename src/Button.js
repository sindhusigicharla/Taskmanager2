import { memo, useContext } from 'react';
import { TasksContext } from './App';

function Button(props){


    const buttonContext = useContext(TasksContext)

    console.log(buttonContext, 'buttonContext')




    const {text, type, operation} = props
    
    return (
        <button className={`btn ${type==='add'?'btn-add':'btn-delete'}`} onClick={()=>operation()}>
            {text}
        </button>
    )
}

export default Button;

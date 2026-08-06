import { useState } from "react";
import Button from "./Button";

function Input(props){

    const {addTask} = props;

    const [input, setInput] = useState('');


    function buttonClicked(){
        addTask(input);
        setInput('')
    }


    return(
        <div className="input-container">
            <input type="text" placeholder="Enter task Name" className="input" value={input}
            onChange={(e)=>setInput(e.target.value)}/>
            <Button text={'Add'} type={'add'} operation={buttonClicked}/>
        </div>
    )
}

export default Input;
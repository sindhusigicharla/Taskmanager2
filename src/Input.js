import { useState } from "react";

function Input(props){

    const {addTask} = props;

    const [input, setInput] = useState('');
    return(
        <div className="input-container">
            <input type="text" placeholder="Enter task Name" className="input" value={input}
            onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={()=>addTask(input)}>Add</button>
        </div>
    )
}

export default Input;
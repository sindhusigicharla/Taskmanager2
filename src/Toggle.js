import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { useState } from 'react';

function Toggle(props){

    

    const {isLightMode, setIsLightMode} = props;
    return(
        <div className='toggle-container'>
            <button className='toggle-button' onClick={()=>{
                setIsLightMode(!isLightMode)
                localStorage.setItem('isLightMode', !isLightMode)
            }} aria-label='Toggle theme'>
                {isLightMode? <ToggleOffIcon className='toggle-icon'/>: <ToggleOnIcon className='toggle-icon'/>}
            </button>
        </div>
    )
}

export default Toggle;


// If you want to controll any component from parent, we have to make the component dumb
// Inorder to make the component dumb, we need uplift the state



// local storage
// 1. localStorage.setItem(key, value) -- > you will set the key value pairs in the local storage
// 2. localStorage.getItem(key) -- > You will retrieve the value of key from local storage
// 3. Before using the local storage, you need to parse the item to JavaScript object otherwise it will be plain string
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { useState } from 'react';

function Toggle(props){

    

    const {isLightMode, setIsLightMode} = props;
    return(
        <div className='toggle-container'>
            <button className='toggle-button' onClick={()=>setIsLightMode(!isLightMode)} aria-label='Toggle theme'>
                {isLightMode? <ToggleOffIcon className='toggle-icon'/>: <ToggleOnIcon className='toggle-icon'/>}
            </button>
        </div>
    )
}

export default Toggle;


// If you want to controll any component from parent, we have to make the component dumb
// Inorder to make the component dumb, we need uplift the state
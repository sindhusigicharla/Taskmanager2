import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { useState } from 'react';

function Toggle(){

    const [isLightMode, setIsLightMode] = useState(false);
    return(
        <div className='toggle-container'>
            <button onClick={()=>setIsLightMode(!isLightMode)}>
                {isLightMode? <ToggleOffIcon/>: <ToggleOnIcon/>}
            </button>
        </div>
    )
}

export default Toggle;
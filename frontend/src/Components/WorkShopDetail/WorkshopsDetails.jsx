import React from "react";
import {useNavigate} from 'react-router-dom';

const WorkshopsDetails = () => {
    const navigate = useNavigate();

    function handleHomeButton() {
        navigate('/');
    }

    return(
        <div className='container-userpage'>
        <br></br><br></br>
    <button className='btn' onClick={() => handleHomeButton()}> Back to main</button>
    </div>
    )
}

export default WorkshopsDetails
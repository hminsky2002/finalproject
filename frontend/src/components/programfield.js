import React  from 'react';

import {useProgramContext} from "../hooks/useProgramsContext";


const ProgramDetails = ({program}) =>{
    const {dispatch} = useProgramContext()
    const handleClick = async() =>{
        const response = await fetch('/api/programs/' + program._id,{
            method: 'DELETE'
        })
        const json = await response.json();
        if (response.ok){
            dispatch({type: 'DELETE_PROGRAM',payload:json})
        }
    }
    return(
        <div className="program-details">
            <h4>{program.programName}</h4>
            <p><strong>Program Description: </strong>{program.description}</p>
            <p><strong>Program Host: </strong>{program.host}</p>
            <p><strong>Program TimeSlot: </strong>{program.timeSlot}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default ProgramDetails
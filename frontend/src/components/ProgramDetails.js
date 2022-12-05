import React  from 'react';

import {useProgramContext} from "../hooks/useProgramsContext";
import {useAuthContext} from "../hooks/useAuthContext";


const ProgramDetails = ({program}) =>{
    const {dispatch} = useProgramContext()
    const {host} = useAuthContext()
    const handleClick = async() =>{
        if(!host){
            return
        }
        const response = await fetch('/api/modifyPrograms/' + program._id,{
            method: 'DELETE',
            headers:{
                'Authorization': `Bearer ${host.token}`
            }
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
            <p><strong>Program DJ: </strong>{program.dj}</p>
            <p><strong>Program Day: </strong>{program.day.value}</p>
            <p><strong>Program Start Time: </strong>{program.startTime}</p>
            <p><strong>Program End Time: </strong>{program.endTime}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default ProgramDetails
import React  from 'react';

const ProgramDetails = ({program}) =>{
    return(
        <div className="program-details">
            <h4>{program.programName}</h4>
            <p><strong>Program Description: </strong>{program.description}</p>
            <p><strong>Program Host: </strong>{program.host}</p>
            <p><strong>Program TimeSlot: </strong>{program.timeSlot}</p>
        </div>
    )
}

export default ProgramDetails
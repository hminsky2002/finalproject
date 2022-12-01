import React, {useState} from "react";
import {useProgramContext} from "../hooks/useProgramsContext";

const AddProgram = () =>{
    const {dispatch} = useProgramContext()

    const [programName,setName] = useState('')
    const [description,setDescription] = useState('')
    const [host,setHost] = useState('')
    const [timeSlot,setTime] = useState('')
    const [error,setError] = useState(null)

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        const program = {programName,description,host,timeSlot}
        const response = await fetch('/api/programs',{
            method:'POST',
            body:JSON.stringify(program),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error);
        }
        if(response.ok){
            setName('');
            setDescription('');
            setHost('');
            setTime('');
            setError(null);
            console.log("New Program Added");
            dispatch({type:'CREATE_PROGRAM',payload:json})
        }



    }
    return (
        <form className="addProgram" onSubmit={handleSubmit}>
            <h3>Add a New Program</h3>
            <label>Program Name</label>
            <input
                type="text"
                onChange={(p)=>setName(p.target.value)}
                value={programName}
                />
            <label>Program Description</label>
            <input
                type="text"
                onChange={(d)=>setDescription(d.target.value)}
                value={description}
            />
            <label>Program Host</label>
            <input
                type="text"
                onChange={(h)=>setHost(h.target.value)}
                value={host}
            />
            <label>Program Time Slot</label>
            <input
                type="text"
                onChange={(t)=>setTime(t.target.value)}
                value={timeSlot}
            />
            <button>add program</button>
            {error && <div className="error">{error}</div>}
        </form>
    )

}

export default AddProgram
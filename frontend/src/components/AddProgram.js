import React, {useState} from "react";
import {useProgramContext} from "../hooks/useProgramsContext";
import {useAuthContext} from "../hooks/useAuthContext";

const AddProgram = () =>{
    const {dispatch} = useProgramContext()
    const {host} = useAuthContext()

    const [programName,setName] = useState('')
    const [description,setDescription] = useState('')
    const [dj,setDj] = useState('')
    const [timeSlot,setTime] = useState('')

    const [error,setError] = useState(null)
    const [emptyFields,setEmptyFields] = useState([]);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if(!host){
            setError('Only hosts may add programs, you devil!')
            return
        }
        const program = {programName,description,dj,timeSlot}
        const response = await fetch('/api/programs',{
            method:'POST',
            body:JSON.stringify(program),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${host.token}`
            }
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error);
            setEmptyFields(json.emptyFields)
            console.log(emptyFields)
        }
        if(response.ok){
            setName('');
            setDescription('');
            setDj('');
            setTime('');
            setError(null);
            setEmptyFields([]);
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
                className={emptyFields.includes('programName') ? 'error' : ''}
                />
            <label>Program Description</label>
            <input
                type="text"
                onChange={(d)=>setDescription(d.target.value)}
                value={description}
                className={emptyFields.includes('description') ? 'error' : ''}
            />
            <label>Program DJ</label>
            <input
                type="text"
                onChange={(h)=>setDj(h.target.value)}
                value={dj}
                className={emptyFields.includes('dj') ? 'error' : ''}

            />
            <label>Program Time Slot</label>
            <input
                type="text"
                onChange={(t)=>setTime(t.target.value)}
                value={timeSlot}
                className={emptyFields.includes('timeSlot') ? 'error' : ''}

            />
            <button>add program</button>
            {error && <div className="error">{error}</div>}
        </form>
    )

}

export default AddProgram
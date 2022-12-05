import React, {useState} from "react";
import {useProgramContext} from "../hooks/useProgramsContext";
import {useAuthContext} from "../hooks/useAuthContext";
import 'react-datalist-input/dist/styles.css';
import DatalistInput from "react-datalist-input";

//map day strings to numerical values
const dayToNumber = {Monday:1 ,Tuesday:2, Wednesday:3, Thursday:4, Friday:5, Saturday:6, Sunday:7}

const AddProgram = () =>{
    const {dispatch} = useProgramContext()
    const {host} = useAuthContext()

    const [programName,setName] = useState('')
    const [description,setDescription] = useState('')
    const [dj,setDj] = useState('')
    const [day,setDay] = useState({})
    const [startTime,setStartTime] = useState('')
    const [endTime,setEndTime] = useState('')
    const [error,setError] = useState(null)

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if(!host){
            setError('Only hosts may add programs, you devil!')
            return
        }
        const program = {programName,description,dj, day, startTime, endTime}
        const response = await fetch('/api/modifyPrograms',{
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
        }
        if(response.ok){
            setName('');
            setDescription('');
            setDj('');
            setDay('');
            setStartTime('');
            setEndTime('')
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
            <label>Program DJ</label>
            <input
                type="text"
                onChange={(h)=>setDj(h.target.value)}
                value={dj}
            />
            <DatalistInput
                placeholder="Weekday"
                label="Select Day Of the Week"
                onSelect={(item) => setDay(item)}
                items={[
                    { id: '1', value:'Monday' },
                    { id: '2', value: 'Tuesday' },
                    { id: '3', value: 'Wednesday' },
                    { id: '4', value: 'Thursday' },
                    { id: '5', value: 'Friday' },
                    { id: '6', value: 'Saturday' },
                    { id: '7', value: 'Sunday' }
                ]}
                type="number"
                value={day.value}
            />

            <label>Program Start Time</label>
            <input
                type="number"
                onChange={(t)=>setStartTime(t.target.value)}
                value={startTime}
            />
            <label>Program EndTime</label>
            <input
                type="number"
                onChange={(t)=>setEndTime(t.target.value)}
                value={endTime}
            />
            <button>add program</button>
            {error && <div className="error">{error}</div>}
        </form>
    )

}

export default AddProgram
import React  from 'react';
import {useEffect} from "react";
import ProgramDetails from '../components/ProgramDetails';
import AddProgram from '../components/AddProgram';
import {useProgramContext} from "../hooks/useProgramsContext";
import {useAuthContext} from "../hooks/useAuthContext";

const ProgramList = () => {
    const {programs,dispatch} = useProgramContext();
    const {host} = useAuthContext();
    useEffect(() => {
        const fetchPrograms = async () => {
            const response = await fetch('/api/programs',{
                headers:{
                    'Authorization': `Bearer ${host.token}`
                }
            })
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_PROGRAMS',payload:json})
            }
        }
        if(host){
            fetchPrograms()
        }
    },[dispatch,host])
    return(
        <div className="Home">
            <div className="programs">
                {programs && programs.map((program) => (
                    <ProgramDetails key={program._id} program={program}/>
                ))}
            </div>
            <AddProgram/>
        </div>
    )
};

export default ProgramList
import React, { Component }  from 'react';
import {useEffect} from "react";
import ProgramDetails from '../components/programfield';
import AddProgram from '../components/add-Program';
import {useProgramContext} from "../hooks/useProgramsContext";


const ProgramList = () => {
    const {programs,dispatch} = useProgramContext();
    useEffect(() => {
        const fetchPrograms = async () => {
            const response = await fetch('/api/programs')
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_PROGRAMS',payload:json})
            }
        }
        fetchPrograms()
    },[dispatch])
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
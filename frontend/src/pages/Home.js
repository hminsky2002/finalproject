import React  from 'react';
import {useEffect} from "react";
import ProgramDetails from '../components/ProgramDetails';
import AddProgram from '../components/AddProgram';
import {useProgramContext} from "../hooks/useProgramsContext";
import {useAuthContext} from "../hooks/useAuthContext";

const Home = () => {
    const {programs,dispatch} = useProgramContext();
    const {host} = useAuthContext();
    useEffect(() => {
        const fetchPrograms = async () => {
            const response = await fetch('/api/getPrograms')
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_PROGRAMS',payload:json})
            }
        }
        fetchPrograms()
    },[dispatch,host])
    return(
        <div className="Home">
            <div className="programs">
                {programs && programs.map((program) => (
                    <ProgramDetails key={program._id} program={program}/>
                ))}
            </div>
        </div>
    )
};

export default Home
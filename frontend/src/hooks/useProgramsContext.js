import {ProgramContext} from "../context/ProgramContext";
import React,{useContext} from "react";

export const useProgramContext = () =>{
    const context = useContext(ProgramContext)
    if(!context){
        throw Error("context scope error")
    }
    return context
}
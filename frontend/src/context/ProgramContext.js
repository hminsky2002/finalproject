import React, { createContext, useReducer} from "react";

export const ProgramContext = createContext();

export const programReducer = (state, action) =>{
    switch (action.type){
        case 'SET_PROGRAMS':
            return {
                programs: action.payload
            }
        case 'CREATE_PROGRAM':
            return{
                programs: [action.payload, ...state.programs]
            }
        default:
            return state
    }
}
export const ProgramContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(programReducer,{
        programs:null
    });
    return(
        <ProgramContext.Provider value={{...state,dispatch}}>
            { children }
        </ProgramContext.Provider>
    )
}
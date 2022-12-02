import React, { useContext } from 'react';
import {AuthContext} from '../context/AuthContext';

export const useAuthContext = () =>{
    const context = useContext(AuthContext);
    if(!context){
        throw Error("context scope error")
    }
    return context
}
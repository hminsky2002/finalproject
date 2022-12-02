import React,{ createContext, useEffect, useReducer } from 'react';

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { host: action.payload }
        case 'LOGOUT':
            return { host: null }
        default:
            return state
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    useEffect(() => {
        const host = JSON.parse(localStorage.getItem('host'))
        if(host){
            dispatch({type:'LOGIN',payload:host})
        }
    }, []);

    console.log('AuthContext state:', state)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )

}
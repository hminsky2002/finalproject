
import React, { useState } from "react"
import login from "./login";
import {useRegister} from "../hooks/useRegister";

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const {register, error, isLoading} = useRegister()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await register(firstName,lastName, email, password);
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <label>First Name:</label>
            <input
                type="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
            />
            <label>Last Name:</label>
            <input
                type="lastName"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
            />
            <label>Email address:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button disabled={isLoading}>Register</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Register
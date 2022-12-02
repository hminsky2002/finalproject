import React from 'react';
import {Link} from 'react-router-dom';
import ReactAudioPlayer from "react-audio-player";
import {useLogout} from "../hooks/useLogout";
import {useAuthContext} from "../hooks/useAuthContext";

const Navbar = () =>{
    const {logout} = useLogout()
    const {host} = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return(
        <header>
            <div className="container">
                {host && (
                <div>
                    <span>{host.email}</span>
                </div>
                    )}
                {host && (
                <div>
                    <button onClick={handleClick}>Log out</button>
                </div>
                    )}
                <Link to="/schedule">
                    <h2>Schedule</h2>
                </Link>
                <Link to="/about">
                    <h2>About</h2>
                </Link>
                <Link to="/">
                    <img src='/wnyusketchlogo.png'/>
                </Link>
                <Link to="/contact">
                    <h2>Contact</h2>
                </Link>
                {!host &&(
                <Link to="/login">
                    <h2>Login</h2>
                </Link>
                    )}

            </div>
        </header>
    )
}

export default Navbar
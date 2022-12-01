import React from 'react';
import {Link} from 'react-router-dom';
import ReactAudioPlayer from "react-audio-player";
const Navbar = () =>{
    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>WNYU</h1>

                </Link>
                <ReactAudioPlayer
                    src="https://wnyuicecasttestserver.tk/wnyu128.mp3"
                    autoPlay
                    controls
                />
                <img src="/wnyulogo.png"/>

            </div>
        </header>
    )
}

export default Navbar
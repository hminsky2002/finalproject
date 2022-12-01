import React, { Component }  from 'react';
import {Link} from 'react-router-dom';
const Navbar = () =>{
    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>WNYU</h1>

                </Link>
                <img src="/wnyulogo.png"/>

            </div>
        </header>
    )
}

export default Navbar
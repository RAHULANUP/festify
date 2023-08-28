import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            <nav>
                <div>
                    <Link to='/'>festify</Link>
                </div>
                <div>
                    <Link to='/event'>Events</Link>
                    <span className='login'><Link  to='/login'>LogIn</Link></span>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
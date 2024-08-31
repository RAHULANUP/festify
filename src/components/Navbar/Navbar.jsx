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
                <div className="nav_content">
                </div>
            </nav>
        </>
    );
}

export default Navbar;
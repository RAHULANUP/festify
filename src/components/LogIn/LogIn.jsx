import React,{useState} from "react";
import "./LogIn.css";

function LogIn(){
    return(
        <>
            <div className='login-container'>
                <form>
                    <h2>LOG IN</h2>
                    <input type='text' placeholder='username'/>
                    <input type='password' placeholder='password'/>
                    <br/>
                    <button>LOGIN</button>
                    <p className='text'>Sorry , login does not work !!!</p>
                </form>
            </div>
        </>
    );
}
export default LogIn;
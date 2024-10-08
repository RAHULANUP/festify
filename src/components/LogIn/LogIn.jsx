import React,{useState} from "react";
import "./LogIn.css";
import {Link,useNavigate} from "react-router-dom";
import {app} from "../../firebase";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";

function LogIn(){
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const auth = getAuth(app);
    const navigate = useNavigate();
    const handleLogin =(event)=>{
        event.preventDefault();
        signInWithEmailAndPassword(auth,name,password)
        .then((user)=>{
            console.log("LOGIN SUCCESSFUL");
            navigate('/event');
        })
        .catch((err)=>console.log(err));
    }
    return(
        <>
            <div className='login-container'>
                <form>
                    <h2>LOG IN</h2>
                    <input type='text' placeholder='username' onChange={(e)=>setName(e.target.value)}/>
                    <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                    <br/>
                    <button onClick={handleLogin}>LOGIN</button>
                </form>
                <div className="create_account">Don't have an account : <Link to="/signup">Create Account</Link></div>
            </div>
        </>
    );
}
export default LogIn;
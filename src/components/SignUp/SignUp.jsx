import React,{useState} from "react";
import "./SignUp.css";
import {Link,useNavigate} from "react-router-dom";
import {app} from "../../firebase";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
function SignUp(){
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const auth = getAuth(app);
    const navigate = useNavigate();
    const handleSignup = (event) =>{
        event.preventDefault();
        createUserWithEmailAndPassword(auth,name,password)
        .then((user)=>{
          console.log("SIGN UP SUCCESSFUL")
          navigate('/event');
        })
        .catch(err=>console.log(err));
    }
    return(
        <>
            <div className='login-container'>
                <form>
                    <h2>SIGN UP</h2>
                    <input type='text' placeholder='username' onChange={(e)=>setName(e.target.value)}/>
                    <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                    <br/>
                    <button onClick={handleSignup}>SignUp</button>
                </form>
                <div className="login_account">Already have an account : <Link to="/login">Login</Link></div>
            </div>
        </>
    );
}
export default SignUp;
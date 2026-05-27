import React from "react";
import { useState ,useRef } from "react";
import './Login.css'
function Login(){
    const [name,setName]=useState("");
    const [pwd, setPwd]=useState("");
    const h4ref= useRef()
    function handler(e){
        e.preventDefault()
        var data={
            username: name,
            password: pwd
        }
        //console.log(data.username)
        //alert(data.username)
        
        h4ref.current.innerText="Login successful "
        h4ref.current.style.display="block"
    }
    function handleReset(){
        setName("")
        setPwd("")
        h4ref.current.style.display="none"
    }
    return(
        <div className="loginform">
            <h2>Login Form</h2>
            <form onSubmit={handler}  onReset={handleReset} className="login">
            <label htmlFor="uname">Username: </label>
            <input type="text" value={name} required={true} onChange={(e)=>setName(e.target.value)} />
            <label htmlFor="pass">Password</label>
            <input type="password" value={pwd} required={true} onChange={(e)=>setPwd(e.target.value)} />
            <button type="reset">Reset</button> 
            <button type="submit">Sign in</button>
            
            </form>
            <h4 ref={h4ref} id="success"></h4>
       </div>
    )
}

export default Login 
import React from "react";
import { useState ,useRef } from "react";
import './Login.css'
function Login(){
    const [name,setName]=useState("");
    const [pwd, setPwd]=useState("");
    const h4ref= useRef()
    function handler(e){
        e.preventDefault()
        const nameIsValid = /^[a-zA-Z0-9]+$/.test(name)
       
        if (!nameIsValid) {
            alert("Name can only contain letters and numbers")
            h4ref.current.innerText = "Login Failed"
            h4ref.current.style.display = "block"
            h4ref.current.style.color="red"
            return
        }

        if (pwd.length<8) {
            alert("Password must be at least 8 characters")
            h4ref.current.innerText = "Login Failed"
            h4ref.current.style.display = "block"
             h4ref.current.style.color="red"
            return
        }

        const data = {
            username: name,
            password: pwd
        }

        h4ref.current.innerText = "Login successful"
        h4ref.current.style.display = "block"
        h4ref.current.style.color="green"
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
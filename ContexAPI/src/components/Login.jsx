import React,{useState,useContext} from "react";
import UserContex from "../contex/UserContex";
function Login(){
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')

    const{setUser}=useContext(UserContex)




    const handleSubmit=(e)=>{
        e.preventDeafult()
        setUser({username,password})//data bhjena hai ese

    }
    return(
       <div id="center">
         <h2>Login</h2>
         <input type="text" 
         value={username}
         onChange={(e)=>setUsername(e.target.value)}
         placeholder="username" />
         { <br/>}
         <input type="text"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         placeholder="password" />
         <button id="button" onClick={handleSubmit}>Submit</button>

       </div>

    )
}
export default Login
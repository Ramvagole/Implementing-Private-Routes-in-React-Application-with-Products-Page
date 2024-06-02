import { useContext, useState } from "react"
import { data } from "./Context"
export function Login(){
    let [a,setval]=useState({username:"",password:""})
    let {login}=useContext(data)
    console.log(a)
    return(
        <>
        <br></br>
        <input type="text" value={a.username} name="username" onChange={(e)=>setval({...a,[e.target.name]:e.target.value})} placeholder="Enter username"/>
        <input type="text" value={a.password} name="password" onChange={(e)=>setval({...a,[e.target.name]:e.target.value})} placeholder="Enter password"/>
        <button onClick={()=>{login(a)}}>Login</button>
        </>
    )
}
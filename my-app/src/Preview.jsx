import { useContext } from "react"
import { data } from "./Context"
import { Navigate } from "react-router-dom"

export function Preview({children}){
    let {log}=useContext(data)
    return(
        <>
        {
            (log)?children:<Navigate to="/login"/>
        }
        </>
    )
}
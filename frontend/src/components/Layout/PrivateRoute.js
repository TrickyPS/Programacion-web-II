import { useContext, useEffect } from "react"
import { Navigate } from "react-router-dom"
import Context from "../../context/userContext"

export const PrivateRoute = ({children})=>{
    const {accessToken} = useContext(Context)

    return accessToken? children : <Navigate to="/login" ></Navigate>
}
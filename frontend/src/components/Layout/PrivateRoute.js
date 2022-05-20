import { useContext, useEffect } from "react"
import { Navigate } from "react-router-dom"
import Context from "../../context/userContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PrivateRoute = ({children})=>{
    const {accessToken} = useContext(Context)

    

    return accessToken? children : <Navigate to="/login" ></Navigate>
}
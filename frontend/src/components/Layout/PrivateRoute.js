import { useContext, useEffect } from "react"
import { Navigate } from "react-router-dom"
import Context from "../../context/userContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PrivateRoute = ({children})=>{
    const {accessToken} = useContext(Context)

    useEffect(()=>{
        if(!accessToken){
            toast.info("Inicia sesión para acceder", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    },[])
    

    return accessToken? children : <Navigate to="/login" ></Navigate>
}
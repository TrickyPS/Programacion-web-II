import { useContext, useEffect } from "react"
import { Navigate } from "react-router-dom"
import Context from "../../context/userContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Children } from "react";
import jwtDecode from "jwt-decode";

export const PrivateRouteAdmin = ({children})=>{
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
        }else if(jwtDecode(accessToken).role === 0){  //no eres admin
            toast.info("No tienes acceso", {
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


    if(!accessToken){
        return <Navigate to="/login" ></Navigate>
    }else if(jwtDecode(accessToken).role === 0){  //no eres admin
       return  <Navigate to="/" ></Navigate>
    }else{ // eres admin
       return  children
    }
    

   
}
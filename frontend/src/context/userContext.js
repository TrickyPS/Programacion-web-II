import jwtDecode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getAccessTokenApi, getRefreshTokenApi } from "../api/auth";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../api/config";
import { getOne } from "../api/user";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Context = createContext({})
export function UserProvider({children}){
    const [accessToken,setAccessToken] = useState(()=>getAccessTokenApi());
    const [refreshToken,setRefreshToken] = useState(()=>getRefreshTokenApi());
    const [user,setUser] = useState(null);
    const [search,setSearch] = useState("")
   const navigate = useNavigate()

    useEffect(()=>{
      
        if(accessToken && refreshToken){
            const {id} = jwtDecode(accessToken);
            (async()=>{
               const response =  await getOne({token:accessToken,id})
               if(response.success)
               setUser(response.data)
               else if(response?.status === 403){
                toast.info("Inicia sesión para continuar", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  });
                  navigate("/login")
               }
            })()
        }
        
    },[accessToken,setAccessToken,refreshToken])

    return (
        <Context.Provider value={{accessToken,setAccessToken,refreshToken,setRefreshToken,user,setUser,search,setSearch}}>
            {children}
        </Context.Provider>
    )
}

export default Context;
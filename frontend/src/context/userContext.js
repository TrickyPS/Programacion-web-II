import jwtDecode from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react"
import { getAccessTokenApi, getRefreshTokenApi } from "../api/auth";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../api/config";
import { getOne } from "../api/user";



const Context = createContext({})
export function UserProvider({children}){
    const [accessToken,setAccessToken] = useState(()=>getAccessTokenApi());
    const [refreshToken,setRefreshToken] = useState(()=>getRefreshTokenApi());
    const [user,setUser] = useState(null);
    const [search,setSearch] = useState("")

    useEffect(()=>{
        if(accessToken && refreshToken){
            const {id} = jwtDecode(accessToken);
            console.log("actualiza datos de usuario");
            (async()=>{
               const response =  await getOne({token:accessToken,id})
               console.log(response.data);
               setUser(response.data)
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
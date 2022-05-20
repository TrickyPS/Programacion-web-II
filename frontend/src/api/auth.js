import {  ACCESS_TOKEN, REFRESH_TOKEN, axios  } from "./config";
import jwtDecode from 'jwt-decode';

export function getAccessTokenApi(){
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if(!accessToken || accessToken === "null"){
        return null;
    }
    
    return willExpireToken(accessToken) ? null : accessToken;
}

export function getRefreshTokenApi(){
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);

    if(!refreshToken || refreshToken === "null"){
        return null;
    }
    return willExpireToken(refreshToken) ? null : refreshToken;
}

export function refreshAccessTokenApi(refreshToken){
    
    const bodyObj = {
        refreshToken: refreshToken
    }

    const params = {
        method: "POST",
        body: JSON.stringify(bodyObj),
        headers: {
            "Content-Type": "application/json"
        }
    };
/*
    fetch(url, params).then(response => {
        if(response.status !== 200){
            return null;
        }
        return response.json();
    }).then(result => {
        if(!result){
            logout();
        }else{
            const {accessToken, refreshToken} = result;
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            localStorage.setItem(REFRESH_TOKEN, refreshToken);
        }
    });*/
}

export function logout(){
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
}

function willExpireToken(token){
    const seconds = 60;
    const metaToken = jwtDecode(token);
    const {exp} = metaToken;
    const now = (Date.now() + seconds) / 1000;

    return now > exp;
}

export const register=async({userName,email,password})=>{
try {
    const response = await axios.post("auth/register",{userName,email,password})
    if(response.status === 200){
        if(response.data?.data){
            return {message:response.data?.message || "Registro exitoso",success:true,data:response.data?.data}
        }else{
            return {message:response.data?.message || "Ha ocurrido un problema",success:false,data:null}
        }
    }
    return {message:response.data?.message || "Ha ocurrido un problema",success:false,data:null}
    
       
    
} catch (error) {
    console.log(error);
    return {message:"Un error ha ourrido. Vuelvelo a intentar",success:false,data:null}
}
}

export const login=async({userName,email,password})=>{
    try {
        const response = await axios.post("auth/login",{email,password})
        if(response.status === 200){
            if(response.data?.data){
                return {message:response.data?.message || "Registro exitoso",success:true,data:response.data?.data}
            }else{
                return {message:response.data?.message || "Ha ocurrido un problema",success:false,data:null}
            }
        }
        return {message:response.data?.message || "Ha ocurrido un problema",success:false,data:null}
        
           
        
    } catch (error) {
        return {message:"Un error ha ourrido. Vuelvelo a intentar",success:false,data:null}
    }
    }
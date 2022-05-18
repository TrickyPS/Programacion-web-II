import { axios } from "./config";

export const addNotiApi = async({token,text,user})=>{
    try {
        const  response = await axios.post("noti",{text,user},{
            headers:{
                Authorization:`Bearer ${token}`,
                'Content-Type' : 'application/json;charset=UTF-8'
            }
        });

        if(response.status === 200){
            if(response.data?.data){
                return {message:"Notificación hecha",success:true,data:response.data?.data}
            }else{
                return {message:response.data?.message || "Ha ocurrido un problema",success:false,data:null}
            }
        }
        return {message:response.data?.message || "Ha ocurrido un problema",success:false,data:null}

    } catch (error) {
        console.log(error);
        return {message:"Ha ocurrido un error",success:false,data:null}
    }
}

export const getNotiApi = async({token})=>{
    try {
        const  response = await axios.get("noti",{
            headers:{
                Authorization:`Bearer ${token}`,
                'Content-Type' : 'application/json;charset=UTF-8'
            }
        });

        if(response.status === 200){
            if(response.data?.data){
                return {message:"Notificaciónes cargadas",success:true,data:response.data?.data}
            }else{
                return {message:response.data?.message || "Ha ocurrido un problema",success:false,data:null}
            }
        }
        return {message:response.data?.message || "Ha ocurrido un problema",success:false,data:null}

    } catch (error) {
        console.log(error);
        return {message:"Ha ocurrido un error",success:false,data:null}
    }
}

export const seeNotiApi = async({token})=>{
    try {
        const  response = await axios.get("noti",{
            headers:{
                Authorization:`Bearer ${token}`,
                'Content-Type' : 'application/json;charset=UTF-8'
            }
        });

        if(response.status === 200){
            if(response.data?.data){
                return {message:"Notificaciónes vistas",success:true,data:response.data?.data}
            }else{
                return {message:response.data?.message || "Ha ocurrido un problema",success:false,data:null}
            }
        }
        return {message:response.data?.message || "Ha ocurrido un problema",success:false,data:null}

    } catch (error) {
        console.log(error);
        return {message:"Ha ocurrido un error",success:false,data:null}
    }
}
import { axios } from "./config"

export const getOne = async({token,id})=>{
    try {
        const response = await axios.get(`user/${id}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        if(response.status === 200){
            if(response.data?.data){
                return {message:response.data?.message || "Datos de usuario",success:true,data:response.data?.data}
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
export const updateUser = async({token,id,body})=>{
    try {
      
        const response = await axios.put(`user/${id}`,body,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        if(response.status === 200){
            if(response.data?.data){
                return {message:response.data?.message || "Datos de usuario",success:true,data:response.data?.data}
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

export const updateImg = async({token,id,body})=>{
    try {
      debugger
        const response = await axios.put(`user/${id}`,body,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        if(response.status === 200){
            if(response.data?.data){
                return {message:response.data?.message || "Datos de usuario",success:true,data:response.data?.data}
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
import { axios } from "./config"

export const addCategory = async({token,name})=>{
    try {
        const  response = await axios.post("category",{name},{
            headers:{
                Authorization:token
            }
        });

        if(response.status === 200){
            if(response.data?.data){
                return {message:response.data?.message || "Categoria agregada",success:true,data:response.data?.data}
            }else{
                return {message:response.data?.message || "Ha ocurrido un problema",success:false,data:null}
            }
        }
        return {message:response.data?.message || "Ha ocurrido un problema",success:false,data:null}

    } catch (error) {
        if(error?.response.status === 403){
            return {message:"", status:403 ,success:false,data:null}
        }
        return {message:"Ha ocurrido un error",success:false,data:null}
    }
}

export const getAllCatgeories = async()=>{
    try {
        const  response = await axios.get("category");

        if(response.status === 200){
            if(response.data?.data){
                return {message:response.data?.message || "Categorias cargadas",success:true,data:response.data?.data}
            }else{
                return {message:response.data?.message || "Ha ocurrido un problema",success:false,data:null}
            }
        }
        return {message:response.data?.message || "Ha ocurrido un problema",success:false,data:null}

    } catch (error) {
        return {message:"Ha ocurrido un error",success:false,data:null}
    }
}
import { axios } from "./config";

export const addNewsApi = async({token,category,images,title,description,descriptionCorta})=>{
    try {
        const  response = await axios.post("news",{category,images,title,description,descriptionCorta},{
            headers:{
                Authorization:token,
                'Content-Type' : 'application/json;charset=UTF-8'
            }
        });

        if(response.status === 200){
            if(response.data?.data){
                return {message:response.data?.message || "Noticia agregada",success:true,data:response.data?.data}
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

export const getAllNewsApi = async()=>{
    try {
        const  response = await axios.get("news");

        if(response.status === 200){
            if(response.data?.data){
                return {message:response.data?.message || "Noticias Cargadas",success:true,data:response.data?.data}
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

export const getOneNewsApi = async({id})=>{
    try {
        const  response = await axios.get(`news/${id}`);

        if(response.status === 200){
            if(response.data?.data){
                return {message:response.data?.message || "Noticia cargada",success:true,data:response.data?.data}
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
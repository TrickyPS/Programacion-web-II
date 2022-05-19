import { axios } from "./config";

export const addPreguntaAPi = async({token,category,images,title,description})=>{
    try {
        const  response = await axios.post("posts",{category,images,title,description},{
            headers:{
                Authorization:token,
                'Content-Type' : 'application/json;charset=UTF-8'
            }
        });

        if(response.status === 200){
            if(response.data?.data){
                return {message:"Pregunta publicada 🚀 ",success:true,data:response.data?.data}
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

export const getAllPostsApi = async()=>{
    try {
        const  response = await axios.get("posts");

        if(response.status === 200){
            if(response.data?.data){
                return {message:response.data?.message || "Preguntas cargadas",success:true,data:response.data?.data}
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


export const getAllMyPostsApi = async({token})=>{
    try {
        const  response = await axios.get("posts/my/posts",{
            headers:{
                Authorization:token,
                'Content-Type' : 'application/json;charset=UTF-8'
            }
        });

        if(response.status === 200){
            if(response.data?.data){
                return {message:response.data?.message || "Preguntas cargadas",success:true,data:response.data?.data}
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

export const getAllOtherPostsApi = async({id})=>{
    try {
        const  response = await axios.get(`posts/other/posts/${id}`);

        if(response.status === 200){
            if(response.data?.data){
                return {message:response.data?.message || "Preguntas cargadas",success:true,data:response.data?.data}
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

export const getAllMyFavoritesApi = async({token})=>{
    try {
        const  response = await axios.get("posts/my/favorites",{
            headers:{
                Authorization:token,
                'Content-Type' : 'application/json;charset=UTF-8'
            }
        });

        if(response.status === 200){
            if(response.data?.data){
                return {message:response.data?.message || "Preguntas cargadas",success:true,data:response.data?.data}
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

export const getOnePostsApi = async({id})=>{
    try {
        const  response = await axios.get(`posts/${id}`);

        if(response.status === 200){
            if(response.data?.data){
                return {message:response.data?.message || "Pregunta cargadas",success:true,data:response.data?.data}
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
import { axios } from "./config";

export const addCommentApi = async({token,comment,idPost})=>{
    try {
        const  response = await axios.post("comments",{comment,idPost},{
            headers:{
                Authorization:token,
                'Content-Type' : 'application/json;charset=UTF-8'
            }
        });

        if(response.status === 200){
            if(response.data?.data){
                return {message:response.data?.message || "Pregunta publicada",success:true,data:response.data?.data}
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

export const getCommentApi = async({id})=>{
    try {
        const  response = await axios.get(`comments/${id}`);

        if(response.status === 200){
            if(response.data?.data){
                return {message:response.data?.message || "Comentario obtenido",success:true,data:response.data?.data}
            }else{
                return {message:response.data?.message || "Ha ocurrido un problema",success:false,data:null}
            }
        }
        return {message:response.data?.message || "Ha ocurrido un problema",success:false,data:null}

    } catch (error) {
        return {message:"Ha ocurrido un error",success:false,data:null}
    }
}

export const getAllCommentsApi = async({id})=>{
    try {
        const  response = await axios.get(`posts/${id}`);

        if(response.status === 200){
            if(response.data?.data){
                return {message:response.data?.message || "Comentario obtenido",success:true,data:response.data?.data}
            }else{
                return {message:response.data?.message || "Ha ocurrido un problema",success:false,data:null}
            }
        }
        return {message:response.data?.message || "Ha ocurrido un problema",success:false,data:null}

    } catch (error) {
        return {message:"Ha ocurrido un error",success:false,data:null}
    }
}

export const addSubCommnet = async({token,comment,idComment})=>{
    try {
        const  response = await axios.post("acomments",{comment,idComment},{
            headers:{
                Authorization:token,
                'Content-Type' : 'application/json;charset=UTF-8'
            }
        });

        if(response.status === 200){
            if(response.data?.data){
                return {message:response.data?.message || "Pregunta publicada",success:true,data:response.data?.data}
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

export const addStarApi = async({token,idComment,idUser})=>{
    try {
        const  response = await axios.post("comments/star",{idComment,idUser},{
            headers:{
                Authorization:token,
                'Content-Type' : 'application/json;charset=UTF-8'
            }
        });

        if(response.status === 200){
            if(response.data?.data){
                return {message:"Estrella agregada a usuario 🤩",success:true,data:response.data?.data}
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
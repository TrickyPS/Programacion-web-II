import { axios } from "./config";

export const addREactionApi = async({token,like,idPost})=>{
    try {
        const  response = await axios.post("reactions",{idPost,like},{
            headers:{
                Authorization:token,
                'Content-Type' : 'application/json;charset=UTF-8'
            }
        });

        if(response.status === 200){
            if(response.data?.data){
                return {message:"Reacción hecha 👍",success:true,data:response.data?.data}
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

export const updateReactionApi = async({token,id,like})=>{
    try {
        const  response = await axios.put(`reactions/${id}`,{like},{
            headers:{
                Authorization:token,
                'Content-Type' : 'application/json;charset=UTF-8'
            }
        });

        if(response.status === 200){
            if(response.data?.data){
                return {message:"Reacción hecha 👍",success:true,data:response.data?.data}
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
import { axios } from "./config";

export const addFavoritoApi = async({token,idPost})=>{
    try {
        const  response = await axios.post("favorites",{idPost},{
            headers:{
                Authorization:`Bearer ${token}`,
                'Content-Type' : 'application/json;charset=UTF-8'
            }
        });

        if(response.status === 200){
            if(response.data?.data){
                return {message:"Agregada a favoritos",success:true,data:response.data?.data}
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

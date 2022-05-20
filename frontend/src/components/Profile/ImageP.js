





import React, { useContext,useEffect,useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Link, useNavigate} from "react-router-dom"
import Context from "../../context/userContext";
import defaultImg from "./../../assets/user.png"
import { getAllMyPostsApi } from "../../api/posts";
import { getAllCatgeories } from "../../api/category";

const ImageP = ()=>{

    const {user,accessToken} = useContext(Context)
    const [myQuestions,setMyQuestions] = useState([])
    const [reactions,setReactions] = useState(0)
    const [categories,setCategories] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
       if(accessToken){
        (async()=>{
            const data = await getAllMyPostsApi({token:accessToken})
            if(data.success){
              setMyQuestions(data?.data)
              var count = 0;
              data.data.forEach(item=>{
                  count += item.reactions.length;
              })
              setReactions(count)
            }
            
           })()
       }
     
       },[])

       useEffect(()=>{
       
            (async()=>{
                const data = await getAllCatgeories();
                if(data.success)
                    setCategories(data.data)
            })()
        
    },[])
    

    return ( 
            
      <div className="col-lg-4 col-sm-12 mt-5" >
      <div className="col-lg-12  col-md-12 col-sm-12  my-auto  ">
         <div className="flex-row row">
           <div className="card text-center col-lg-12 col-md-12 col-sm-12">
    <div className="">   
    <div >
<img className="rounded-circle" src={user?.image  || defaultImg} style={{width:"90px",height:"90px",objectFit:"cover"}}/>
</div>
</div>
    <div className="card-body">
      <h5 className="card-title">{user?.userName || ""}</h5>
      <Link to="/perfil"  className="colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm  shadow-none m-2 mx-auto" type="button" style={{width:"200px",height:"35px"}}>Ver mi perfil</Link>
      <div className="d-flex  justify-content-center border rounded mt-2 ">
                       
                       <div className="col-sm-3 border-right mt-3">
                           <div className="description-block">
                               <h5 className="description-header">{myQuestions?.length || 0}</h5> <span className="description-text">Preguntas</span>
                           </div>
                       </div>
                       <div className="col-sm-3 m-3 border-right">
                           <div className="description-block">
                               <h5 className="description-header">{user?.stars.length || "0"}</h5> <span className="description-text">{user?.stars.length === 1 ?"Estrella":"Estrellas"}</span>
                           </div>
                       </div>
                       <div className="col-sm-3 m-3">
                           <div className="description-block">
                               <h5 className="description-header">{reactions || 0}</h5> <span className="description-text">Reacciones</span>
                           </div>
                       </div>
                     
</div>
       </div>
       </div>
       <div className="card text-center mt-5 " style={{height:"195px"}}>
    <div className="mt-2">Noticias Recientes</div>
    <div className="content   col-lg-9 mx-auto row my-auto">

<div className=" text-center">
<div className="prim  row c">
 
 {
     categories.map((item,index)=>(
        <div key={index} className="m-1">
        <Link to="/ViewNews" >{item.name}</Link>
        </div>
     ))
 }

 
</div>

</div>
</div>

    
       </div>
       </div>
       </div>
         </div>
    )
}

export default ImageP

















import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom"
import Context from "../../context/userContext";
import defaultImg from "./../../assets/user.png"

const ImageP = ()=>{

    const {user} = useContext(Context)
    

    return ( 
            
      <div className="col-lg-3 " style={{paddingTop:"48px"}}>
      <div className="col-lg-12  col-md-6 col-sm-12  my-auto  ">
         <div className="flex-row row">
           <div className="card text-center mt-3 col-lg-12 col-md-12 col-sm-12">
    <div className="">   
    <div className="col-lg-4 row text-center mx-auto m-1">
<img className="rounded-circle" src={user?.image  || defaultImg} width="10"/>
</div>
</div>
    <div className="card-body">
      <h5 className="card-title">TrickyPS</h5>
      <Link to="/perfil"  className="colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm  shadow-none m-2 mx-auto" type="button" style={{width:"200px",height:"35px"}}>Ver mi perfil</Link>
      <div className="d-flex  justify-content-center border rounded mt-2 ">
                       
                       <div className="col-sm-3 border-right m-3">
                           <div className="description-block">
                               <h5 className="description-header">3,200</h5> <span className="description-text">Preguntas</span>
                           </div>
                       </div>
                       <div className="col-sm-3 m-3 border-right">
                           <div className="description-block">
                               <h5 className="description-header">13,000</h5> <span className="description-text">Respuestas</span>
                           </div>
                       </div>
                       <div className="col-sm-3 m-3">
                           <div className="description-block">
                               <h5 className="description-header">35</h5> <span className="description-text">Reacciones</span>
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
  <div className="m-1">
  <a href="">Noticia de programacion</a>
  </div>

  <div className="m-1">
  <a href="">Noticia de programacion</a>
  </div>

  <div className="m-1">
  <a href="">Noticia de programacion</a>
  </div>
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











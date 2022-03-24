import React from "react";
import img from './peopletog.jpg';
import './loginind.css';
const Login = ()=>{
    return (
      <div  className="heigh" style={{paddingTop:'0px'}}>
      <div className=" colorbk heigh " style={{marginTop:"59px"}}>
<div className="row heigh">
<img src={img} alt=""  className="heigh colorbk d-none d-xs-none d-sm-none d-md-none d-lg-block col-sm-12 col-md-12 col-lg-7 backImg"/>
<div className="col-md-12 col-lg-5 col-sm-12 backLogin align-self-center justify-content-center justify-content-lg-center texttypeLight300" >
 <div className="text-center mb-5 col-lg-8 col-md-10 col-sm-10 mx-auto">
 <h2 className="textisizetitleu texttypeBebas">Inicia sesion en geekup</h2>
 <span className="textisizetitle">La mejor comunidad  de programacion te espera</span>
 </div>
          
                   <div className="form-group p-4 col-lg-8 col-md-10 col-sm-10 col-xs-4 mx-auto">
                       <div className="pb-2">
                       <span className="textisize paddingbot ">Correo</span>
                       </div>
                       
                       <input type="email" className="form-control inputwidh " name="correosign" id="emailr"
                           placeholder="Ingresa tu correo" />
                   </div>

                   <div className="form-group p-4 col-lg-8 col-md-10 col-sm-10 col-xs-4 mx-auto">
                       <div className="pb-2">
                       <span className="textisize paddingbot ">Contraseña</span>
                       </div>
                       
                       <input type="password" className="form-control inputwidh " name="contraseñasign" id="passwordr"
                           placeholder="Ingresa tu contraseña" />
                   </div>
                   <div className="text-center">
                   <span >Tu contraseña debe de ser menor a 8 caracteres</span>
                   </div>

               
                   <div className="grupo text-center pt-3 ">
                       <button type="sumbit" className="zoom btn btn-primary btn-md col-lg-8 col-md-5 col-sm-5 col-xs-4">Inicia sesion</button>
                   </div>





</div>
</div>


</div>
   </div>
    )
}

export default Login;
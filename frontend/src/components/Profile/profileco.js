import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './profilecocss.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Images } from "./photo";
import Half from "./ImageP";
const profileco = ()=>{
 
    return (
        
        <div className=" colorbk heigh  texttypeLight300" style={{marginTop:"59px"}}>
         <div className="d-flex row">
         <div className="m-5 col-lg-8 scrollyc">
        
        <div className=" col-lg-12 pt-3 " >
             <div className=" flex-row card">  
           
              <div className=" row align-items-center text-center col-lg-4 m-2"  >
                <div><span>Perfil</span></div>
   <div className="row">
   <div className="col-lg-6 row text-center mx-auto m-1">
<img className="rounded-circle m-3" src="https://i.imgur.com/RpzrMR2.jpg" width="1000000"/>
</div>
<a class="colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm  shadow-none m-2 mx-auto" type="button" style={{width:"200px",height:"35px"}}>Cambiar foto de perfil</a>
     <span>Esta descripcion aparecera en tu perfil  abajo de tu imagen</span>
   </div>
      
      
</div>

<div className="row col-lg-7 mx-auto  text-center align-items-center">
<div className=" row">
  
    <span className="">Acerca de ti</span>
  <textarea class="form-control mt-3" aria-label="With textarea" style={{height:"100px"}}></textarea>  
  <span>Agrega una descripcion de tu perfil</span>
  <a class="colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm  shadow-none m-2 mx-auto" type="button" style={{width:"200px",height:"35px"}}>Cambiar descripcion</a>
</div>




</div>

</div>






  </div>
  <div className=" col-lg-12 pt-3  card mt-4" >


  <div className="col-lg-12 mx-auto text-center mt-2">
             <span>Informacion personal</span>
             </div>
           
<div className="mx-auto row justify-content-center text-start m-4">
<div class="form-outline col-lg-5 m-1">
<label class="form-label" for="form12">Nombre</label>
<input type="text" id="form12" class="form-control" />

</div>
<div class="form-outline col-lg-5 m-1">
<label class="form-label" for="form12">Apellido</label>
<input type="text" id="form12" class="form-control" />

</div>
<div class="form-outline col-lg-5 m-1">
<label class="form-label" for="form12">Correo</label>
<input type="text" id="form12" class="form-control" />

</div>

<div class="form-outline col-lg-5 m-1">
<label class="form-label" for="form12">Contraseña</label>
<input type="text" id="form12" class="form-control" />

</div>

<div class="form-outline col-lg-7 m-1">
<label class="form-label" for="form12">Region</label>
<select class="form-select" aria-label="Default select example">
<option selected>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>

</div>
<div className="col-lg-12 text-center ">
<a class="colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm  shadow-none m-2 " type="button" style={{width:"200px",height:"35px"}}>Cambiar Informacion</a>
</div>

</div>





  </div>
 
<div className=" col-lg-12 pt-3  card mt-4 " >
<div className="col-lg-12 text-center mx-auto "> <span>Mis preguntas</span></div>
 <div className="contain scrolly"> 

   <div className="d-flex flex-row ">
   
     <div className="image m-1 col-lg-2 d-flex my-auto mx-auto">

<span className="my-auto"><span>Titulo: Problema con c++</span></span>
</div>
<div className="content   col-lg-9 mx-start row my-auto">

<div className="col-lg-10  row">
    <span>Pregunta: Tengo una duda de programacion avanzada la cual me tiene algo preocupado</span>
    <span>Categoria: Backend</span>
</div>
<div className="col-lg-2  row">
<a class="colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm  shadow-none m-2 " type="button" style={{width:"200px",height:"35px"}}>Ver publicacion</a>
</div>

</div>
</div> 
 </div>








</div>   

<div className=" col-lg-12 pt-3  card mt-4 " >
<div className="col-lg-12 text-center mx-auto "> <span>Mis comentarios</span></div>
 <div className="contain scrolly"> 

   <div className="d-flex flex-row ">
   
     <div className="image m-1 col-lg-2 d-flex my-auto">
<img className="rounded-circle m-3" src="https://i.imgur.com/RpzrMR2.jpg" width="70"/>
<span className="my-auto">Otro Perfil</span>
</div>
<div className="content   col-lg-9 mx-start row my-auto">

<div className="col-lg-10  row">
    <span>Pregunta: Tengo una duda de programacion avanzada la cual me tiene algo preocupado</span>
    <span>Titulo: Problema con c++</span>
    <span>Comentario: El problema de tu codigo se encuentra en la parte del header</span>
</div>
<div className="col-lg-2  row">
<a class="colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm  shadow-none m-2"  type="button" style={{width:"100px",height:"35px"}}>Ver publicacion</a>
</div>

</div>
</div> 



 </div>








</div>  
<div className=" col-lg-12 pt-3  card mt-4 " >
<div className="col-lg-12 text-center mx-auto "> <span>Mis Favoritos</span></div>
 <div className="contain scrolly"> 

   <div className="d-flex flex-row ">
   
     <div className="image m-1 col-lg-2 d-flex my-auto">
<img className="rounded-circle m-3" src="https://i.imgur.com/RpzrMR2.jpg" width="70"/>
<span className="my-auto">Otro Perfil</span>
</div>
<div className="content   col-lg-9 mx-start row my-auto">

<div className="col-lg-10  row">
    <span>Pregunta: Tengo una duda de programacion avanzada la cual me tiene algo preocupado</span>
    <span>Titulo: Problema con c++</span>

</div>
<div className="col-lg-2  row">
<a class="colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm  shadow-none m-2"  type="button" style={{width:"100px",height:"35px"}}>Ver publicacion</a>
</div>

</div>
</div> 



 </div>








</div> 
        </div>
        <Half></Half> 
        
         </div>
        
       

   
     
   
        </div>
    )
}

export default profileco;
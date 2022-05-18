import React, { useContext,useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './profilecocss.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Images } from "./photo";
import Half from "./../Profile/ImageP";
import Context from "../../context/userContext";
import defaultImg from "./../../assets/user.png"
import { updateImg, updateUser } from "../../api/user";
import {getStorage,ref,uploadBytesResumable,getDownloadURL} from "firebase/storage"

const Profileco = ()=>{

  const [fullname,setFullname] = useState()
  const [email,setEmail] = useState()
  const [username,setUsername] = useState()
  const [img,setimg] = useState()
  const [url,setURL] = useState()
const {accessToken,user,setUser}= useContext(Context);

  const updateinfo = async(e)=>{
   try{
    console.log("entra");
   
    if(email && fullname && username){
    debugger
      var body = {
        email: email,
        fullName: fullname,
        userName:username
      };
    
      const data = await updateUser({token:accessToken,id:user._id,body:body})
      debugger
      console.log(data);
      debugger
      if(data.success)
     {
       setUser(data.data);
       console.log(data);
        
     }else{
       debugger
       console.log("no entra");
     }
    
    
    }else{
    debugger
    }

   }catch(error){

    debugger
console.log(error);
   }
 


  }

  const updateImage = async(e)=>{
    console.log("Entra al inicio");
    const storage = getStorage()
  const storageRef = ref(storage,`user/${new Date().getTime()}-${img.name}`)
  const uploadTask= uploadBytesResumable(storageRef,img)
  uploadTask.on('state_changed',
(snapshot) => {
// Observe state change events such as progress, pause, and resume
// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
console.log('Upload is ' + progress + '% done');
},
(error) => {
ya
},
() => {
  const imgRef = ref.child("/imgs/" + img.name);
  imgRef.getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  setURL((e)=>[...e,downloadURL])

  console.log(url);
 
 




});
}
);

    
    console.log("entra");
    
   debugger
   if(url){

    var body = {
      image:img
    };
  
    const data = await updateImg({token:accessToken,id:user._id,body:body})
  
    console.log(data);
  
    if(data.success)
   {
     setUser(data.data);
     console.log(data);
      
   }else{
     debugger
     console.log("no entra");
   }
  
  
  }else{
  debugger
  }



  }

function imprime(){

 
}

 
    return (
        
        <div className=" colorbk heigh  texttypeLight300" style={{marginTop:"59px"}}>
         <div className="d-flex row">
         <div className="m-5 col-lg-8 scrollyc">
        
        <div className=" col-lg-12 pt-3 " >
             <div className="col-lg-3  mx-auto card">  
           
              <div className="d-flex flex-row  row text-center  m-2"  >
                <span>Imagen de perfil</span>
   
   <div className="col-lg-6 row text-center mx-auto m-1 row">
<img className="rounded-circle m-3 mx-auto" style={{height:"80px",width:"110px"}} src={img?URL.createObjectURL(img):user?.image || defaultImg} />
</div>
<div className="colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm  shadow-none m-2 mx-auto"  type="button" style={{width:"200px",height:"35px"}}>  <label class="button" for="upload">Subir Imagen</label>
        <input className="d-none" id="upload" type="file"  onChange={(e)=>setimg(e.target.files[0])} ></input></div>
        
   
   
    
      
</div>
<div className="colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm  shadow-none m-2 mx-auto"  onClick={updateImage} type="button" style={{width:"200px",height:"35px"}}>  
</div>


</div>






  </div>
  <div className=" col-lg-12 pt-3  card mt-4" >


  <div className="col-lg-12 mx-auto text-center mt-2">
             <span>Informacion personal</span>
             </div>
           
<div className="mx-auto row justify-content-center text-start m-4">
<div className="form-outline col-lg-5 m-1">
<label className="form-label" for="form12">Nombre de Usuario</label>
<input type="text" id="form12" className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)} />

</div>

<div className="form-outline col-lg-5 m-1">
<label className="form-label" for="form12">Correo</label>
<input type="text" id="form12" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value) }/>

</div>

<div className="form-outline col-lg-5 m-1">
<label className="form-label" for="form12">Nombre Completo</label>
<input type="text" id="form12" className="form-control" value={fullname} onChange={(e)=>setFullname(e.target.value)} />

</div>


<div className="col-lg-12 text-center ">
<a className="colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm  shadow-none m-2 " onClick={updateinfo} type="button" style={{width:"200px",height:"35px"}}>Cambiar Informacion</a>
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
<a className="colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm  shadow-none m-2 " type="button" style={{width:"200px",height:"35px"}}>Ver publicacion</a>
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
<a className="colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm  shadow-none m-2"  type="button" style={{width:"100px",height:"35px"}}>Ver publicacion</a>
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
<a className="colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm  shadow-none m-2"  type="button" style={{width:"100px",height:"35px"}}>Ver publicacion</a>
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

export default Profileco;
import React, { useContext,useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './profilecocss.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Images } from "./photo";
import Half from "./../Profile/ImageP";
import Context from "../../context/userContext";
import defaultImg from "./../../assets/user.png"
import { getOne, updateImg, updateUser } from "../../api/user";
import {getStorage,ref,uploadBytesResumable,getDownloadURL} from "firebase/storage"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllMyFavoritesApi, getAllMyPostsApi } from "../../api/posts";
import { deleteFavoritoApi } from "../../api/favoritos";

const Profileco = ()=>{
  const {accessToken,user,setUser}= useContext(Context);
  const [fullname,setFullname] = useState("")
  const [email,setEmail] = useState("")
  const [username,setUsername] = useState("")
  const [img,setimg] = useState()
  const [myQuestions,setMyQuestions] = useState([])
  const [myFavorites,setMyFavorites] = useState([])

  const navigate = useNavigate()

  useEffect(()=>{


    
    if(user){
      setFullname(user?.fullName || "")
      setEmail(user?.email || "")
      setUsername(user?.userName || "")
      if(user?.favorites.length > 0){
        setMyFavorites(user?.favorites)
      }
    }
  },[user])

  useEffect(()=>{
   (async()=>{
    const data = await getAllMyPostsApi({token:accessToken})
    if(data.success){
      setMyQuestions(data?.data)
    }
    
   })()

  },[])


  const updateinfo = async()=>{
   try{
   
    if(email && fullname && username){
      debugger
      var body = {
        email: email,
        fullName: fullname,
        userName:username
      };
    
      const data = await updateUser({token:accessToken,id:user._id,body:body})
      if(data.success)
      {
        const responseUser =  await getOne({token:accessToken,id:user._id})
        if(responseUser.success){
         setUser(responseUser.data)
        }
        toast.success("Datos de  usuario actualizado", {
         position: "top-right",
         autoClose: 4000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         }) 
      }
      if(data?.status === 403){
        toast.info("Inicia sesión para continuar", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          navigate("/login")
       }else{
        toast.error(data.message || "Ha ocurrido un error", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
       }
    
    }
   }catch(error){
console.log(error);
   }
  }

  const updateImage = async()=>{
    if(!user)
      navigate("/login")

    const storage = getStorage()
    const storageRef = ref(storage,`user/${new Date().getTime()}-${img.name}`)
    const uploadTask= uploadBytesResumable(storageRef,img)
  uploadTask.on('state_changed',
(snapshot) => {
const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
},
(error) => {
  console.log(error);
},
() => {
  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
   (async()=>{
    var body = {
      image:downloadURL
    };
  
    const data = await updateImg({token:accessToken,id:user._id,body:body})
    if(data.success)
     {
      const responseUser =  await getOne({token:accessToken,id:user._id})
      if(responseUser.success){
       setUser(responseUser.data)
      }
       toast.success("Imagen de usuario actualizada", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }) 
     }
     if(data?.status === 403){
      toast.info("Inicia sesión para continuar", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        navigate("/login")
     }else{
      toast.error(data.message || "Ha ocurrido un error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
     }
   })()

});
}
);
  }


const quitarFavorito =async(post)=>{
  const response = await deleteFavoritoApi({token:accessToken,idPost:post})
  if(response.success){
    navigate(0)
  }
  else if(response?.status === 403){
    toast.info("Inicia sesión para continuar", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      navigate("/login")
   }
}
 
    return (
        
        <div className=" colorbk heigh container texttypeLight300" style={{marginTop:"59px"}}>
   
         <div className="d-flex row">
         <div className="mt-5 col-lg-8 scrollyc">
        
        <div className=" col-lg-12  row " >
             <div className="col-lg-12 row mx-auto card">  
           
              <div className=" text-center  mt-2"  >
                <span>Imagen de perfil</span>
   
                <div >
                  <img className="rounded-circle " style={{width:"90px",height:"90px",objectFit:"cover"}} src={img?URL.createObjectURL(img):user?.image || defaultImg} />
                </div>
                <div className="colorWhite buttonColorsNav  zoom btn btn-outline-primary btn-sm  shadow-none m-2 mx-auto"  type="button" style={{width:"200px",height:"35px"}}>  
                  <label className="button d-grid  " htmlFor="upload" style={{cursor:"pointer"}} >Subir Imagen</label>
                  <input className="d-none" id="upload" type="file"  onChange={(e)=>setimg(e.target.files[0])} ></input>
                </div>

              </div>
              <div className="colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm  shadow-none m-2 mx-auto"  onClick={updateImage} type="button" style={{width:"200px",height:"35px"}}>  
                Guardar imagen
              </div>


            </div>



  </div>
  <div className=" col-lg-12 pt-3  card mt-4" >


  <div className="col-lg-12 mx-auto text-center mt-2">
             <span>Informacion personal</span>
             </div>
           
<div className="mx-auto row justify-content-center text-start m-4">
<div className="form-outline col-lg-5 m-1">
<label className="form-label" htmlFor="form12">Nombre de Usuario</label>
<input type="text" id="form12" className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)} />

</div>

<div className="form-outline col-lg-5 m-1">
<label className="form-label" htmlFor="form12">Correo</label>
<input type="text" id="form12" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value) }/>

</div>

<div className="form-outline col-lg-5 m-1">
<label className="form-label" htmlFor="form12">Nombre Completo</label>
<input type="text" id="form12" className="form-control" value={fullname} onChange={(e)=>setFullname(e.target.value)} />

</div>


<div className="col-lg-12 text-center ">
<button className="colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm  shadow-none m-2 " onClick={updateinfo} type="button" style={{width:"200px",height:"35px"}}>Cambiar Informacion</button>
</div>

</div>





  </div>
 
<div className=" col-lg-12 pt-3  card mt-4 " >
<div className="col-lg-12 text-center mx-auto "> <span>Mis preguntas</span></div>
 <div className="contain scrolly"> 

  {
    myQuestions.map((item,index)=>(
      <div className="d-flex flex-row " key={index}>
      <div className="image m-1 col-lg-2 d-flex my-auto mx-auto">
 
 <span className="my-auto"><span>Titulo: {item?.title} </span></span>
 </div>
 <div className="content   col-lg-9 mx-start row my-auto">
 
 <div className="col-lg-10  row">
     <span>Pregunta: Tengo una duda ...</span>
     <span>Categoria: {item?.category.name}</span>
 </div>
 <div className="col-lg-2  row">
 <button onClick={()=>navigate(`/SeeQuestion/${item?._id}`)} className="colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm  shadow-none m-2 " type="button" style={{width:"200px",height:"35px"}}>
   Ver</button>
 </div>
 
 </div>
 </div> 
    )).reverse()
  }
    
 </div>








</div>   


<div className=" col-lg-12 pt-3 mb-5 card mt-4 " >
<div className="col-lg-12 text-center mx-auto "> <span>Mis Favoritos</span></div>
 <div className="contain scrolly"> 

    {
      myFavorites.map((item,index)=>(        
      <div className="d-flex flex-row " key={index} >
   
        <div className="image m-1 col-lg-2 d-flex my-auto">
   <img className="rounded-circle m-3" src={item?.post.user.image || defaultImg} style={{width:"40px",height:"40px",objectFit:"cover"}}/>
   <span className="my-auto">{item?.post.user.userName}</span>
   </div>
   <div className="content   col-lg-9 mx-start row my-auto">
   
   <div className="col-lg-10  row">
       <span>Pregunta: Tengo una duda ...</span>
       <span>Titulo: {item?.post.title}</span>
   
   </div>
   <div className="col-lg-2  d-flex">
   <button onClick={()=>navigate(`/SeeQuestion/${item?.post._id}`)} className="colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm  shadow-none m-2"  type="button" style={{width:"100px",height:"35px"}}>Ver </button>
   <button onClick={()=>quitarFavorito(item?._id)} className="colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm  shadow-none m-2"  type="button" style={{width:"100px",height:"35px"}}>Quitar </button>
   </div>
   
   </div>
   </div> 
      )).reverse()
    }


 </div>

</div> 
        </div>
        <Half></Half> 
        
         </div>
        
   
        </div>
    )
}

export default Profileco;
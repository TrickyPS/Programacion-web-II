import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Editor } from "react-draft-wysiwyg";
import './news.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Half from "./../Profile/ImageP";
import { getAllCatgeories } from "../../api/category";
import {getStorage,ref,uploadBytesResumable,getDownloadURL} from "firebase/storage"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addNewsApi } from "../../api/news";
import { useContext } from "react";
import Context from "../../context/userContext";
import{EditorState, convertToRaw} from "draft-js"
import { useNavigate } from "react-router-dom";

const AddNews = ()=>{
    
    const [categories,setCategories] = useState([])
    const {accessToken} = useContext(Context)

    const [title,setTitle] = useState("")
    const [category,setCategory] = useState("")
    const [description,setDescription] = useState(EditorState.createEmpty())
    const [descriptionCorta,setDescriptionCorta] = useState("")
    const [images,setImages] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        (async()=>{
            const data = await getAllCatgeories();
            if(data.success)
                setCategories(data.data)
        })()
    },[])

    const handlePublicar = async()=>{

      if(convertToRaw(description.getCurrentContent()).blocks.length === 1 && convertToRaw(description.getCurrentContent()).blocks[0].text === '')
      return 
     
        if(title && category && description &&  descriptionCorta){
            const response = await addNewsApi({token:accessToken,title,category,descriptionCorta,description:JSON.stringify(convertToRaw(description.getCurrentContent())),images})
            if(response.success) {
               toast.success(response.message || "Ha ocurrido un error", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
                setTitle("")
                setCategory("")
                setDescription("")
                setImages([])
                setDescriptionCorta("")
                
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
             }else{
              toast.error(response.message || "Ha ocurrido un error", {
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
        }
    
    

    function uploadCallbackHandler(file) {
        return new Promise(
          (resolve, reject) => {
              console.log("Entra al inicio");
              const storage = getStorage()
            const storageRef = ref(storage,`noticias/${new Date().getTime()}-${file.name}`)
            const uploadTask= uploadBytesResumable(storageRef,file)
            uploadTask.on('state_changed',
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
  },
  (error) => {
    reject()
  },
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setImages((e)=>[...e,downloadURL])

      resolve({data:{link:downloadURL}});
    });
  }
);
          }
           
        );
      }


    return (
        <div className=" heigh container  texttypeLight300 " style={{marginTop:"59px"}}>
            
        <div className="row heigh  textisize">
        
<div className="texttypeBebas mt-5 mb-5 editor col-lg-8 align-self">
    <div className="card">
    <div className="title col-lg-10 mx-auto pt-3 text-center ">
<h4 className="">Crear Noticia</h4>

    </div>
    <div className="select col-10 mx-auto mt-5">
    <div className=" mb-3">
            <span>Selecciona la categoria</span>
            </div>
    <select className="form-select" aria-label="Default select example" value={category} onChange={(e)=>setCategory(e.target.value)} >
  <option  value="" disabled >Selecciona una categoría</option>
        {
            categories.map((item,index)=>(
                <option key={index} value={item._id}>{item.name}</option>
            ))
        }
</select>
    </div>
    <div className="title col-10 mx-auto mt-5">
        <div className=" mb-3">
   <span>Titulo de tu Noticia</span>
        </div>
    <input type="email" className="form-control inputwidh " name="title123" value={title} onChange={(e)=>setTitle(e.target.value)}
                                placeholder="Ingresa el titulo " />
    </div>

    <div className="title col-10 mx-auto mt-5">
        <div className=" mb-3">
   <span>Descripción corta</span>
        </div>
    <textarea  className="form-control inputwidh " name="title123" value={descriptionCorta} onChange={(e)=>setDescriptionCorta(e.target.value)}
                                placeholder="Ingresa la descripción " style={{resize:"none"}} />
    </div>
   
    <div className="editor col-10 mx-auto mt-5  ">
    <span>Crea tú noticia</span>
        <div className="writet mb-3 " >
           
        </div>
    <Editor 
 toolbar={{ image: { uploadCallback: uploadCallbackHandler,previewImage:true,urlEnabled:false }}}
 editorStyle={{border:"1px solid #CCCCCC"}}
toolbarClassName="toolbarClassName"
wrapperClassName="wrapperClassName"
editorClassName="editorClassName backeditor"
editorState={description} onEditorStateChange={setDescription}
/>


    </div>
    <div className="col-lg-10 mx-auto m-5 ">
    <div onClick={handlePublicar} className="perfil zoom btn colorWhite text-center buttonColorsNav  d-lg-block " style={{marginRight:"15px"}}> Publicar</div>
    </div>
   
    </div>
  

</div>

<Half></Half>
        </div>
        
        
        </div>
    )
}

export default AddNews;
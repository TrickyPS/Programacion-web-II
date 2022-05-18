import React,{useEffect, useState,useContext} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Editor } from "react-draft-wysiwyg";
import './question.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Half from "./../Profile/ImageP";
import { getAllCatgeories } from "../../api/category";
import{EditorState, convertToRaw} from "draft-js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addPreguntaAPi } from "../../api/posts";
import Context from "../../context/userContext";
import {getStorage,ref,uploadBytesResumable,getDownloadURL} from "firebase/storage"

const AddQuestion = ()=>{

    const [categories,setCategories] = useState([])
    const [title,setTitle] = useState("")
    const [category,setCategory] = useState("")
    const [description,setDescription] = useState(EditorState.createEmpty())
    const [images,setImages] = useState([])

    const {accessToken} = useContext(Context)

    useEffect(()=>{
        (async()=>{
            const data = await getAllCatgeories();
            if(data.success)
                setCategories(data.data)
            console.log(categories);
        })()
    },[])

    const handlePublicar = async()=>{
        if(title && category && description ){
            const response = await addPreguntaAPi({token:accessToken,title,category,description:JSON.stringify(convertToRaw(description.getCurrentContent())),images})
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
                
             }
              else
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

        function uploadCallbackHandler(file) {
            return new Promise(
              (resolve, reject) => {
                  console.log("Entra al inicio");
                  const storage = getStorage()
                const storageRef = ref(storage,`questions/${new Date().getTime()}-${file.name}`)
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
        <div className=" colorbk heigh  " style={{marginTop:"59px"}}>
                             <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>  
<ToastContainer />
        <div className="row heigh texttypeBebas textisize">
        
<div className="editor m-5 col-lg-8 align-self">
    <div className="card">
    <div className="title col-lg-10 mx-auto pt-4 text-center ">
<h4 className="">Crea tu pregunta</h4>
    </div>
    <div className="select col-10 mx-auto mt-5">
    <div className=" mb-3">
            <span>Selecciona la categoria</span>
            </div>
    <select className="form-select" aria-label="Default select example" value={category} onChange={(e)=>setCategory(e.target.value)}  >
  <option  selected value={null} > Selecciona una categoría </option>
        {
            categories.map((item,index)=>(
                <option key={index} value={item._id} >{item.name}</option>
            ))
        }
</select>
    </div>
    <div className="title col-10 mx-auto mt-5">
        <div className=" mb-3">
   <span>Título de tu pregunta</span>
        </div>
    <input type="email" className="form-control inputwidh " name="title342" value={title} onChange={(e)=>setTitle(e.target.value)} 
                                placeholder="Ingresa el titulo " />
    </div>
    <div className="editor col-10 mx-auto mt-5  ">
    <span>Redacta tu pregunta</span>
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
    <div className="col-8 mx-auto m-5">
    <div onClick={handlePublicar} className="perfil zoom btn colorWhite text-center buttonColorsNav d-grid" style={{marginRight:"15px"}}> Publicar</div>
    </div>
   
    </div>
  

</div>

<Half></Half>
       
        </div>
        
        
        </div>
    )
}

export default AddQuestion;
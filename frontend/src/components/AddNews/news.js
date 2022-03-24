import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Editor } from "react-draft-wysiwyg";
import './news.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { FacebookComment } from "./facebookcomm";
const AddNews = ()=>{
    return (
        <div className=" colorbk heigh  " style={{marginTop:"59px"}}>
        <div className="row heigh texttypeBebas textisize">
        
<div className="editor col-lg-9 align-self  border  border-dark">
    <div className="">
    <div className="title col-lg-8 mx-auto m-5 text-center ">
<h4 className="">Crear Noticia</h4>
    </div>
    <div className="select col-lg-8 mx-auto m-5">
    <div className="name mb-3">
            <span>Selecciona la categoria</span>
            </div>
    <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    </div>
    <div className="title col-lg-8 mx-auto m-5">
        <div className="name mb-3">
   <span>Titulo de tu pregunta</span>
        </div>
    <input type="email" className="form-control inputwidh " name="correosign" id="emailr"
                                placeholder="Ingresa el titulo " />
    </div>
    <div className="editor col-lg-8 mx-auto m-5 border ">
    <span>Redacta tu pregunta</span>
        <div className="writet mb-3 " >
           
        </div>
    <Editor 

toolbarClassName="toolbarClassName"
wrapperClassName="wrapperClassName"
editorClassName="editorClassName backeditor"

/>

    </div>
    <div className="col-lg-8 mx-auto m-5">
    <div className="perfil zoom btn colorWhite text-center buttonColorsNav d-none d-sm-none d-md-none d-lg-block" style={{marginRight:"15px"}}> Publicar</div>
    </div>
   
    </div>
  

</div>

       
        </div>
        
        
        </div>
    )
}

export default AddNews;
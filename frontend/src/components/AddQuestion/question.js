import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Editor } from "react-draft-wysiwyg";
import './question.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Half from "./ImageP";
const AddQuestion = ()=>{
    return (
        <div className=" colorbk heigh  " style={{marginTop:"59px"}}>
        <div className="row heigh texttypeBebas textisize">
        
<div className="editor m-5 col-lg-8 align-self">
    <div className="card">
    <div className="title col-lg-10 mx-auto pt-4 text-center ">
<h4 className="">Crea tu pregunta</h4>
    </div>
    <div className="select col-lg-10 mx-auto m-5">
    <div className=" mb-3">
            <span>Selecciona la categoria</span>
            </div>
    <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    </div>
    <div className="title col-lg-10 mx-auto m-5">
        <div className=" mb-3">
   <span>Titulo de tu pregunta</span>
        </div>
    <input type="email" className="form-control inputwidh " name="correosign" id="emailr"
                                placeholder="Ingresa el titulo " />
    </div>
    <div className="editor col-lg-10 mx-auto m-5  ">
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

<Half></Half>
       
        </div>
        
        
        </div>
    )
}

export default AddQuestion;
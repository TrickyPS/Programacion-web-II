import React,{useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Editor } from "react-draft-wysiwyg";
import './viewne.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Half from "./../Profile/ImageP";
import defaultImg from "./../../assets/logo-azul.png"
import { useState } from "react";
import { getAllNewsApi } from "../../api/news";
import { useNavigate } from "react-router-dom";
const AddQuestion = ()=>{

  const [noticias,setNoticias] = useState([])

  const navigate = useNavigate()

  useEffect(()=>{
    (async()=>{
      const data = await getAllNewsApi();
      if(data.success)
        setNoticias(data.data);
      
    })()
  },[])



    return (
        <div className="texttypeLight300 colorbk heigh  " style={{marginTop:"59px"}}>
          <div className="d-flex row  heigh  textisize">
    
    <div className="texttypeBebas col-lg-8 col-md-12 col-sm-12 m-5">
  
        <div className="division1  row justify-content-center">
        <div className="d-flex flex-direction  justify-content-center ">
    <div className="select col-lg-3 m-3">
  <div className=" mb-3">
          <span>Selecciona la categoria</span>
          </div>
  <select className="form-select" aria-label="Default select example">
<option selected>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>
  </div>
  <div className="select col-lg-3 m-3">
  <div className=" mb-3">
          <span>Selecciona la categoria</span>
          </div>
  <select className="form-select" aria-label="Default select example">
<option selected>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>
  </div>
  <div className="select col-lg-3 m-3">
  <div className=" mb-3">
          <span>Selecciona la categoria</span>
          </div>
  <select className="form-select" aria-label="Default select example">
<option selected>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>
  </div>

    </div>
    <div className="cards row  scrollyc">
        {
          noticias.map((item,index)=>(
            <div className="col-lg-3 col-md-6 col-sm-6  pt-2" key={index}>
              <div className="card">
                <img style={{width:"100%",height:"70px",objectFit:"cover"}} src={item.images[0]?.url || defaultImg} className="card-img-top" alt="Fissure in Sandstone"/>
                <div className="card-body">
                  <h5 className="card-title">{item.title || `Noticia ${index}`}</h5>
                  <div  className="card-text elipsis-card">{item.descriptionCorta}</div> 
                  <div onClick={()=>{
                      navigate(`/seeNews/${item._id}`)
                  }}  className="perfil zoom btn colorWhite text-center buttonColorsNav d-grid" >
               
                    <span   >Ver</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
    </div>
 
        </div>
     </div>
     

        <Half></Half>
      </div>
   
    </div>
    )
}

export default AddQuestion;
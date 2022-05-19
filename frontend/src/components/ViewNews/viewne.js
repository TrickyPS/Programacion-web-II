import React,{useContext, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Editor } from "react-draft-wysiwyg";
import './viewne.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Half from "./../Profile/ImageP";
import defaultImg from "./../../assets/logo-azul.png"
import { useState } from "react";
import { getAllNewsApi } from "../../api/news";
import { useNavigate } from "react-router-dom";
import { getAllCatgeories } from "../../api/category";
import Context from "../../context/userContext";
const AddQuestion = ()=>{

  const [noticias,setNoticias] = useState([])
  const [filter,setFilter] = useState([])
  const [category,setCategory] = useState("")
  const [categories,setCategories] = useState([])
  const navigate = useNavigate()
  const {search,setSearch} = useContext(Context)

  useEffect(()=>{
    (async()=>{
      const data = await getAllNewsApi();
      if(data.success)
        setNoticias(data.data);
        setFilter(data.data);
      
    })()
  },[])
  

  useEffect(()=>{
    (async()=>{
        const reponse = await getAllCatgeories();
        console.log(reponse);
        if(reponse.success)
            setCategories(reponse.data)
           
    })()
},[])

useEffect(()=>{
if(search !== ""){
  setFilter(noticias.filter(a=>a?.title.toLowerCase().includes(search.toLowerCase())))
}else{
  setFilter(noticias)
}
},[search,setSearch,noticias])

    return (
        <div className="texttypeLight300 container colorbk heigh  " style={{marginTop:"59px"}}>
          <div className="d-flex row  heigh  textisize">
    
    <div className="texttypeBebas col-lg-8 col-md-12 col-sm-12 mt-5">
  
        <div className="division1  row justify-content-center">
        <div className="d-flex flex-direction   ">
    <div className="select col-lg-3 m-3">
  <div className=" mb-3">
          <span>Selecciona la categoria</span>
          </div>
  <select className="form-select" value={category} onChange={(e)=>{
    setCategory(e.target.value);
    if(e.target.value !== "" && e.target.value !== null){
      setFilter(noticias.filter(a=>a?.category._id === e.target.value))
    }
  }} aria-label="Default select example">
  <option disabled value="">Escoge una categoria</option>
      {
        categories.map((item,index)=>(
          <option key={index} value={item._id}>{item.name}</option>
        ))
      }
</select>
  </div>


    </div>
    <div className="cards row  scrollyc">
        {
          filter.map((item,index)=>(
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
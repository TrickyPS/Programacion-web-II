import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Editor } from "react-draft-wysiwyg";
import './seene.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Half from "./../Profile/ImageP";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getOneNewsApi } from "../../api/news";
import { useState } from "react";
import draftToHtml from "draftjs-to-html"
import{ convertToRaw,convertFromRaw} from "draft-js"

const SeeNews = ()=>{

  const params = useParams()
  const [news,setNews] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
      (async()=>{
        const data = await getOneNewsApi({id:params.id})
        console.log(data.data);
        if(data.success)
          setNews(data.data)
        else
          navigate("/viewNews")
      })()
  },[])


    return (
        <div  style={{marginTop:"59px"}}>
          <div className="d-flex row heigh ">
    
    <div className="texttypeLight300 m-5 col-lg-8 col-md-12 col-sm-12 ">
      {
        news ?
        <div className="container scrollyca card">
        <h1 className="pt-3 text-center texttypeBebas">{news.title}</h1>

        <h6 className="text-muted" >{news.descriptionCorta || "No contiene descripción"}</h6>
    
          <div  dangerouslySetInnerHTML={{__html: draftToHtml(convertToRaw(convertFromRaw(JSON.parse(news.description))))}}>

          </div>
           
        </div>
        :
        <div className=" bg-white d-flex align-items-center justify-content-center" style={{width:"100%",height:"100%"}}> 
        <div class="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      }

     </div>
     


   <Half></Half>


   
     
      </div>
   
     
     
        
       
        </div>
    )
}

export default SeeNews;
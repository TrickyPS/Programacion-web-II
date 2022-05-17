import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './homec.css';
import { CommentComment } from "./facebookcomm";
import Half from "./../Profile/ImageP";
import { getAllPostsApi } from "../../api/posts";
import draftToHtml from "draftjs-to-html"
import{ convertToRaw,convertFromRaw} from "draft-js"
import defaultImg from "./../../assets/user.png"

const Home = ()=>{

    const [showComentarios,setShowComentarios] = useState(false)
    const [showComentar,setShowComentar] = useState(false)

    const [posts,setPosts] = useState([])
    useEffect(()=>{
        (async()=>{
            const data = await getAllPostsApi();
            if(data.success)
                setPosts(data.data)
        })()
    },[])
 
    
    return (
        <div className="texttypeLight300 d-flex row" style={{marginTop:"59px"}}>
             <div className="m-5 col-lg-8 col-md-12 col-sm-12  " >
                 {
                     console.log(posts)
                 }
        {
            posts.map((item,index)=>(
                
        <div className="mx-auto col-md-10  pt-5" key={index}>
        <div className="m-2 card d-flex flex-column comment-section">
            <div className=" p-2">
                <div className="d-flex flex-row user-info">
                    <img className="rounded-circle  m-2" src={item.user?.image || defaultImg} width="40"/>
                    <div className="d-flex flex-column  ml-3">
                        <span className="d-block font-weight-bold name" style={{paddingLeft:"5px"}}>{item.user?.userName}</span>
                        <span className="date text-black-50" style={{paddingLeft:"5px"}}>{ Date(item.createdAt)}</span></div>
                </div>
                <div className="mt-2">
                <div  dangerouslySetInnerHTML={{__html: draftToHtml(convertToRaw(convertFromRaw(JSON.parse(item.description))))}}>

</div>
                </div>
            </div>
            <div className="">
                <div className="d-flex flex-row justify-content-between fs-12">
                <div className="d-flex">
                <div className="like p-2 cursor"><i className="fa fa-thumbs-o-up"></i><span className="ml-1">Favoritos</span></div>
                <div onClick={()=>setShowComentar(!showComentar)} className="like p-2 cursor"><i className="fa fa-thumbs-o-up"></i><span className="ml-1">Comentar</span></div>
                </div>
                <div onClick={()=>setShowComentarios(!showComentarios)} className="like p-2 cursor"><i className="fa fa-commenting-o"></i><span className="ml-1">{showComentarios ? "Ocultar comentarios":"Ver Comentarios"}</span></div>

                </div>
            </div>
            {
                showComentar &&
                <div className="bg-light p-2">
                <div className="d-flex flex-row align-items-start"><img className="rounded-circle m-2" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/><textarea className="form-control ml-1 shadow-none textarea"></textarea>
                <div className="m-2 align-items-center">
                    <a className=" colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm   shadow-none ml-4" type="button">Comentar</a>
                    </div>
                    </div>
                <div className="mt-2 pl-5 d-flex justify-content-start">
        
                 </div>
            </div>
            }
            <div className="comments bg-white scrollycomments">
        <div className="together">
  
                <div className="comentsofComments  d-flex">
            
             {
                 showComentarios &&
                 <CommentComment></CommentComment>
             }
                
                    </div>
        </div>
           
           
            </div>
            
        </div>
        </div>
            ))
        }
             </div>
           
            
            <Half  ></Half>
            
            
        </div>
       
    )
}

export default Home;
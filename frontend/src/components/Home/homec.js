import React, { useState,useEffect, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './homec.css';
import { CommentComment } from "./facebookcomm";
import Half from "./../Profile/ImageP";
import { getAllPostsApi } from "../../api/posts";
import draftToHtml from "draftjs-to-html"
import{ convertToRaw,convertFromRaw} from "draft-js"
import defaultImg from "./../../assets/user.png"
import { addCommentApi, getAllCommentsApi } from "../../api/comentarios";
import Context from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import dateFormat, { i18n } from "dateformat";
import { AiFillLike} from 'react-icons/ai';
import { addREactionApi, updateReactionApi } from "../../api/reactions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addFavoritoApi } from "../../api/favoritos";
import { getOne } from "../../api/user";
import { addNotiApi } from "../../api/noti";

i18n.dayNames = [
    "Dom",
    "Lun",
    "Mar",
    "Mier",
    "Jue",
    "Vie",
    "Sab",
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  
  i18n.monthNames = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

 export const Question = ({data})=>{
    const [showComentarios,setShowComentarios] = useState(false)
    const [showComentar,setShowComentar] = useState(false)
      const [item,setItem] = useState(data)
    const navigate = useNavigate()
    const [comment,setComment] = useState("") 
    const {accessToken,user,setUser} = useContext(Context)
    const [hideStar,setHideStar] = useState(null)

    useEffect(()=>{
       setHideStar( data.comments.find(a=>a.star === true))
    },[])

      const handleComentar = async()=>{
       if(!user)
        navigate("/login")

        if(comment.length > 0 && item){
            const reponse = await addCommentApi({token:accessToken,comment,idPost:item._id})
            if(reponse.success){
                setComment("")
                setShowComentarios(true)
                const reponsePost = await getAllCommentsApi({id:item._id});
                if(reponsePost.success){
                    setItem(reponsePost.data)
                }
               if(data?.user._id !== user?._id ){
                var text = "hizo un comentario a una de tus preguntas"
                await addNotiApi({token:accessToken,text,user:data?.user._id})
               }
            }
        }
    }

    const handleReaccionar = async()=>{
      if(user){
            if(item.reactions.filter(a=>a.user === user._id).length > 0){
                var isLike = false;
               item.reactions.filter(a=>a.user === user._id).map(b=>{
                    if(b.user === user._id)
                    isLike = b;
                })
                const response = await updateReactionApi({token:accessToken,like:!isLike?.like,id:isLike?._id})
                
        if(response.success) {
            const reponsePost = await getAllCommentsApi({id:item._id});
            if(reponsePost.success){
                setItem(reponsePost.data)
            }
            toast.success(response.message, {
             position: "top-right",
             autoClose: 4000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             })
             
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

            }else{
               
            const response = await addREactionApi({token:accessToken,like:true,idPost:data._id})
        if(response.success) {
            const reponsePost = await getAllCommentsApi({id:item._id});
            if(reponsePost.success){
                setItem(reponsePost.data)
            }
            toast.success(response.message, {
             position: "top-right",
             autoClose: 4000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             })
             
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
     }else
        navigate("/login")
    }

    const handleFavorito = async()=>{
        if(user){
              
              const response = await addFavoritoApi({token:accessToken,idPost:data._id})
          if(response.success) {
              const reponsePost = await getAllCommentsApi({id:item._id});
              if(reponsePost.success){
                  setItem(reponsePost.data)
              }
              const responseUser =  await getOne({token:accessToken,id:user._id})
               if(responseUser.success){
                setUser(responseUser.data)
               }
              toast.success(response.message, {
               position: "top-right",
               autoClose: 4000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               })
               
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
              
       }else
          navigate("/login")
      }

      return (
        <div className="mx-auto col-md-10  pb-5">

        <div className="m-2 card d-flex flex-column comment-section">
            <div className=" p-2">
                <div className="d-flex flex-row user-info">
                    <img className="rounded-circle  m-2" src={item?.user.image || defaultImg} style={{width:"40px",height:"40px",objectFit:"cover"}}/>
                    <div className="d-flex flex-column  ml-3">
                        <span onClick={()=>navigate(`/SeeProfile/${item?.user._id}`)}  className="d-block font-weight-bold name  " style={{paddingLeft:"5px",cursor:"pointer"}}>{item?.user.userName}</span>
                        <span className="date text-black-50" style={{paddingLeft:"5px"}}>{item?.category.name}</span>
                        
                        <span className="date text-black-50" style={{paddingLeft:"5px"}}>{dateFormat(item?.createdAt,"GMT-6:dddd, mmmm dS, yyyy, h:MM:ss TT").split("6:")[1]}</span>
                        
                        </div>
                </div>
                <div className="mt-2">
                <span className="h6 fw-bolder " style={{paddingLeft:"5px"}}>{item?.title}</span>
                <div style={{overflowX:"auto"}}  dangerouslySetInnerHTML={{__html: draftToHtml(convertToRaw(convertFromRaw(JSON.parse(item?.description))))}}>

</div>
                </div>
            </div>
            <div className="">
                <div className="d-flex flex-row justify-content-between fs-12">
                <div className="d-flex">
                <div className="like p-2 cursor  " onClick={handleReaccionar} ><span className="ml-1"><AiFillLike/> ({item?.reactions.filter(a=>a.like === true).length} )</span></div>
              
                        {
                             !user?.favorites.filter(a=>{
                                if(a.post._id===item._id)
                                    return a
                            }).length > 0 &&
                            <div className="like p-2 cursor" onClick={handleFavorito} ><span className="ml-1">Favoritos</span></div>
                        }
                  
                
                <div onClick={()=>setShowComentar(!showComentar)} className="like p-2 cursor"><i className="fa fa-thumbs-o-up"></i><span className="ml-1">Comentar</span></div>
                </div>
               {
                   item?.comments.length > 0 &&
                   <div onClick={()=>setShowComentarios(!showComentarios)} className="like p-2 cursor"><i className="fa fa-commenting-o"></i><span className="ml-1">{showComentarios ? "Ocultar comentarios":`Ver Comentarios(${ item?.comments.length})`}</span></div>
               }

                </div>
            </div>
            {
                showComentar &&
                <div className="bg-light p-2">
                <div className="d-flex flex-row align-items-start">
                    <img className="rounded-circle m-2" src={user?.image || defaultImg} style={{width:"40px",height:"40px",objectFit:"cover"}}/>
                    <textarea className="form-control ml-1 shadow-none textarea" value={comment} onChange={(e)=>setComment(e.target.value)} ></textarea>
                <div className="m-2 align-items-center">
                    <button onClick={handleComentar} className=" colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm   shadow-none ml-4" type="button">Comentar</button>
                    </div>
                    </div>
                <div className="mt-2 pl-5 d-flex justify-content-start">
        
                 </div>
            </div>
            }
            <div className="comments bg-white scrollycomments">
        <div className="together">
  
                <div className="comentsofComments w-100 ">
            
                {    
                    showComentarios &&
                    <>
                       {
                             item.comments.map((element,index)=>(
                                <CommentComment key={index} setHaveStar={setHideStar} haveStar={Boolean(hideStar)} userOwner={data?.user._id} commentData={element} ></CommentComment>
                            ))
                       }
                    </>
                }
                
                    </div>
        </div>
           
           
            </div>
            
        </div>
        </div>
      )
  }

const Home = ()=>{
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        (async()=>{
            const data = await getAllPostsApi();
            if(data.success){
                setPosts(data.data)
            }
        })()
    },[])

   

    return (
       <div className="container  heigh">
            <div className="texttypeLight300 d-flex row" style={{marginTop:"59px"}}>
             <div className="mt-5 mb-5 col-lg-8 col-md-12 col-sm-12  " > 
        {
           posts.length > 0 && 
           posts.map((item,index)=>(
                
            <Question  key={index} data={item} ></Question>
        )).reverse()
        }
             </div>
            <Half  ></Half>
        </div>
       </div>
       
    )
}

export default Home;
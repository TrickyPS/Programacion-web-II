import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { addCommentApi, addStarApi, addSubCommnet, getCommentApi } from "../../api/comentarios";
import Context from "../../context/userContext";
import dateFormat, { i18n } from "dateformat";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiFillStar} from "react-icons/ai"
import { addNotiApi } from "../../api/noti";
import defaultImg from "./../../assets/user.png"

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

export const  CommentComment = ({commentData,userOwner,haveStar,setHaveStar}) => {
     const  [ state,setState] = useState(false);
     const  [ showcomentar,setShowComentar] = useState(false);
     const [comment,setComment] = useState("")
     const {accessToken,user} = useContext(Context)
     const navigate = useNavigate();
    const [data,setData] = useState(commentData);

    const handleComentar = async()=>{
        if(comment.length > 0){
            const response = await addSubCommnet({token:accessToken,comment,idComment:data._id})
            if(response.success){
                setComment("")
                setState(true)
                const newComments = await getCommentApi({id:commentData._id});
                    if(newComments.success){
                        setData(newComments.data)
                    }
           
            }
        }
    }

    const handleEstrella = async()=>{
        if(!user)
        navigate("login")

        const response = await addStarApi({token:accessToken,idComment:data._id,idUser:data?.user._id})

        if(response.success){
            const newComments = await getCommentApi({id:commentData._id});
                    if(newComments.success){
                        setData(newComments.data)
                    }
                    setHaveStar(true)
                    if(userOwner !== user?._id ){
                       
                        var text = "ha escogido tú respuesta como la mejor."
                        await addNotiApi({token:accessToken,text,user:userOwner})
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
        } else{
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

  return (
    <div className="comments  scrollycomments">
      
    <div className="together">
    <div className="d-flex flex-row comment-row">
                <div className="p-2"><span className="round"><img className="rounded-circle" src={data?.user.image || defaultImg} style={{width:"40px",height:"40px",objectFit:"cover"}} alt="user" /></span></div>
                <div className="comment-text pt-2 w-100">
                <span onClick={()=>navigate(`/SeeProfile/${data?.user._id}`)}  style={{cursor:"pointer"}} className="d-block font-weight-bold name">{data?.user.userName}</span>
                    <div className="comment-footer"> 
                    <span className="date">{dateFormat(
                data?.createdAt,"GMT-6:dddd, mmmm dS, yyyy, h:MM:ss TT"
              ).split("6:")[1]}</span> 
                    <span className="action-icons"> <a href="#" data-abc="true">
                        <i className="fa fa-pencil"></i>
                        </a> <a href="#" data-abc="true">
                            <i className="fa fa-rotate-right"></i>
                            </a> 
                            <a href="#" data-abc="true">
                                <i className="fa fa-heart"></i>
                                </a> 
                    </span> 
                     </div>
                    <p className="m-b-5 m-t-10">{data?.comment}</p>
                
                    <div >
                <div className="d-flex flex-row-reverse fs-12">
                   {
                       data?.acomments.length > 0 &&
                       <div onClick={()=>{setState(!state)}} className="like p-2 cursor"><i className="fa fa-commenting-o"></i><span className="ml-1">{state ? "Ocultar comentarios":"Ver Comentarios"}</span></div>
                   }
                    <div onClick={()=>{setShowComentar(!showcomentar)}} className="like p-2 cursor"><i className="fa fa-commenting-o"></i><span className="ml-1">Comentar</span></div>
                    {
                       user?._id === userOwner && user?._id !== data?.user._id && !haveStar &&
                        <div onClick={handleEstrella} className="like p-2 cursor"><span className="ml-1">Dar Estrella</span></div>
                    }

                    {
                        data?.star &&
                        <div onClick={handleEstrella} className="like p-2 text-success cursor"><span className="ml-1">Mejor respuesta<AiFillStar/></span></div>
                    }

                </div>
            </div>
            
                </div>
                
            </div>
            
           {
               showcomentar &&
                <div className="bg-light p-2 row ">
                    <div className="col-1" > </div>
                    <div className="d-flex flex-row align-items-start col-11">
                        <img className="rounded-circle m-2" src={data?.user.image || defaultImg} style={{width:"40px",height:"40px",objectFit:"cover"}}/>
                        <textarea value={comment} onChange={(e)=>setComment(e.target.value)} className="form-control ml-1 shadow-none textarea"></textarea>
                        <div className="m-2 align-items-center">
                            <button onClick={handleComentar} className=" colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm   shadow-none ml-4" type="button">Comentar</button>
                        </div>
                   </div>
              
                </div>
           }
          {state && 
                <>
                    {
                        data.acomments.map((item,index)=>(
                            <div className="row" key={index}>
                            <div className="col-1"></div>
                          <div className="col-11 d-flex">
                          <div className=""><span className="round">
                                <img className="rounded-circle " src={item?.user.image || defaultImg}alt="user" style={{width:"40px",height:"40px",objectFit:"cover",marginRight:"3px"}}  /></span>
                                </div>
                            <div className="comment-text pt-2">
                            <span onClick={()=>navigate(`/SeeProfile/${item?.user._id}`)} style={{cursor:"pointer"}} className="d-block font-weight-bold name">{item?.user.userName}</span>
                                <div className="comment-footer"> 
                                <span className="date">{dateFormat(item?.createdAt,"GMT-6:dddd, mmmm dS, yyyy, h:MM:ss TT").split("6:")[1]}</span> 
                                <span className="action-icons"> <a href="#" data-abc="true"><i className="fa fa-pencil"></i></a> <a href="#" data-abc="true"><i className="fa fa-rotate-right"></i></a> <a href="#" data-abc="true"><i className="fa fa-heart"></i></a> </span> </div>
                                <p className="m-b-5 m-t-10">{item.comment}</p>
                            </div>
                          </div>
                         
                         
                        
                            </div>
                        ))
                    }
                </>
          }
    </div>
       
       
        </div>
  )
}

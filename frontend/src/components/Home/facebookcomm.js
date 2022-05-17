import React, { useState } from "react";

export const  CommentComment = () => {
     const  [ state,setState] = useState(false);
     const  [ showcomentar,setShowComentar] = useState(false);
    
  return (
    <div className="comments  scrollycomments">
    <div className="together">
    <div className="d-flex flex-row comment-row">
                <div className="p-2"><span className="round"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" alt="user" width="40"/></span></div>
                <div className="comment-text pt-2">
                <span className="d-block font-weight-bold name">Marry Andrews</span>
                    <div className="comment-footer"> 
                    <span className="date">April 14, 2019</span> 
                    <span className="label label-info">Pending</span> 
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
                    <p className="m-b-5 m-t-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                
                    <div >
                <div className="d-flex flex-row-reverse fs-12">
                    <div onClick={()=>{setState(!state)}} className="like p-2 cursor"><i className="fa fa-commenting-o"></i><span className="ml-1">{state ? "Ocultar comentarios":"Ver Comentarios"}</span></div>
                    <div onClick={()=>{setShowComentar(!showcomentar)}} className="like p-2 cursor"><i className="fa fa-commenting-o"></i><span className="ml-1">Comentar</span></div>

                </div>
            </div>
            
                </div>
                
            </div>
            
           {
               showcomentar &&
                <div className="bg-light p-2 row ">
                    <div className="col-1" > </div>
                    <div className="d-flex flex-row align-items-start col-11">
                        <img className="rounded-circle m-2" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/><textarea className="form-control ml-1 shadow-none textarea"></textarea>
                        <div className="m-2 align-items-center">
                            <a className=" colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm   shadow-none ml-4" type="button">Comentar</a>
                        </div>
                   </div>
              
                </div>
           }
          {state && 
            <div className="row">
                <div className="col-1"></div>
              <div className="col-11 d-flex">
              <div className=""><span className="round">
                    <img className="rounded-circle " src="https://i.imgur.com/RpzrMR2.jpg" alt="user" width="40" style={{marginRight:"3px"}} /></span>
                    </div>
                <div className="comment-text pt-2">
                <span className="d-block font-weight-bold name">Marry Andrews</span>
                    <div className="comment-footer"> <span className="date">April 14, 2019</span> <span className="label label-info">Pending</span> <span className="action-icons"> <a href="#" data-abc="true"><i className="fa fa-pencil"></i></a> <a href="#" data-abc="true"><i className="fa fa-rotate-right"></i></a> <a href="#" data-abc="true"><i className="fa fa-heart"></i></a> </span> </div>
                    <p className="m-b-5 m-t-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                </div>
              </div>
             
             
            
                </div>



          }
    </div>
       
       
        </div>
  )
}

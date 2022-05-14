import React, { useState } from "react";

export const  CommentComment = () => {
     const  [ state,setState] = useState(false);
    
  return (
    <div className="comments  scrollycomments">
    <div className="together">
    <div className="d-flex flex-row comment-row">
                <div className="p-2"><span classNamee="round"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" alt="user" width="40"/></span></div>
                <div className="comment-text pt-2">
                <span className="d-block font-weight-bold name">Marry Andrews</span>
                    <div className="comment-footer"> <span className="date">April 14, 2019</span> <span className="label label-info">Pending</span> <span className="action-icons"> <a href="#" data-abc="true"><i className="fa fa-pencil"></i></a> <a href="#" data-abc="true"><i className="fa fa-rotate-right"></i></a> <a href="#" data-abc="true"><i className="fa fa-heart"></i></a> </span> </div>
                    <p className="m-b-5 m-t-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                    <a class="colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm  shadow-none m-2 mx-auto" type="button" onClick={()=>{setState(!state)}} style={{width:"100px",height:"35px"}}>Ver respuestas</a>
                </div>
                
            </div>
          {state && 
            <div className="comentsofComments  d-flex">
        
                <div className="paddingleft"><span className="round">
                    <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" alt="user" width="40"/></span>
                    </div>
                <div className="comment-text pt-2">
                <span className="d-block font-weight-bold name">Marry Andrews</span>
                    <div className="comment-footer"> <span className="date">April 14, 2019</span> <span className="label label-info">Pending</span> <span className="action-icons"> <a href="#" data-abc="true"><i className="fa fa-pencil"></i></a> <a href="#" data-abc="true"><i className="fa fa-rotate-right"></i></a> <a href="#" data-abc="true"><i className="fa fa-heart"></i></a> </span> </div>
                    <p className="m-b-5 m-t-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                </div>
             
             
            
                </div>



          }
    </div>
       
       
        </div>
  )
}

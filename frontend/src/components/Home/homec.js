import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './homec.css';
import { CommentComment } from "./facebookcomm";
import Half from "./ImageP";
const Home = ()=>{
 
    
    return (
        <div className="texttypeLight300 d-flex row">
             <div className="m-5 col-lg-8 col-md-8 col-sm-8 pt-4" style={{marginTop:"59px"}}>

        <div className="mx-auto col-md-10  pt-5">
            <div className="m-2 card d-flex flex-column comment-section">
                <div className=" p-2">
                    <div className="d-flex flex-row user-info"><img className="rounded-circle  m-2" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                        <div className="d-flex flex-column  ml-3">
                            <span className="d-block font-weight-bold name" style={{paddingLeft:"5px"}}>Marry Andrews</span>
                            <span className="date text-black-50" style={{paddingLeft:"5px"}}>Shared publicly - Jan 2020</span></div>
                    </div>
                    <div className="mt-2">
                        <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="">
                    <div className="d-flex flex-row fs-12">
                        <div className="like p-2 cursor"><i className="fa fa-thumbs-o-up"></i><span className="ml-1">Favoritos</span></div>
                        <div className="like p-2 cursor"><i className="fa fa-commenting-o"></i><span className="ml-1">Comentarios</span></div>

                    </div>
                </div>
                <div className="bg-light p-2">
                    <div className="d-flex flex-row align-items-start"><img className="rounded-circle  m-2" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/><textarea className="form-control ml-1 shadow-none textarea"></textarea>
                    <div className="m-2 align-items-center">
                        <a className=" zoom btn btn-outline-primary btn-sm  shadow-none ml-4" type="button">Comentar</a>
                        </div>
                        </div>
                    <div className="mt-2 pl-5 d-flex justify-content-start">
            
                     </div>
                </div>
            </div>
        </div>
        <div className="mx-auto col-md-10  pt-5">
            <div className="m-2 card d-flex flex-column comment-section">
                <div className=" p-2">
                    <div className="d-flex flex-row user-info"><img className="rounded-circle  m-2" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                        <div className="d-flex flex-column  ml-3">
                            <span className="d-block font-weight-bold name" style={{paddingLeft:"5px"}}>Marry Andrews</span>
                            <span className="date text-black-50" style={{paddingLeft:"5px"}}>Shared publicly - Jan 2020</span></div>
                    </div>
                    <div className="mt-2">
                        <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="">
                    <div className="d-flex flex-row fs-12">
                    <div className="like p-2 cursor"><i className="fa fa-thumbs-o-up"></i><span className="ml-1">Favoritos</span></div>
                        <div className="like p-2 cursor"><i className="fa fa-commenting-o"></i><span className="ml-1">Comentarios</span></div>

                    </div>
                </div>
                <div className="comments bg-white scrollycomments">
            <div className="together">
      
                    <div className="comentsofComments  d-flex">
                
                  <CommentComment></CommentComment>
                    
                        </div>
            </div>
               
               
                </div>
                <div className="bg-light p-2">
                    <div className="d-flex flex-row align-items-start"><img className="rounded-circle m-2" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/><textarea className="form-control ml-1 shadow-none textarea"></textarea>
                    <div className="m-2 align-items-center">
                        <a className=" zoom btn btn-outline-primary btn-sm  shadow-none ml-4" type="button">Comentar</a>
                        </div>
                        </div>
                    <div className="mt-2 pl-5 d-flex justify-content-start">
            
                     </div>
                </div>
            </div>
        </div>
    </div>
    <Half></Half>
        </div>
       
    )
}

export default Home;
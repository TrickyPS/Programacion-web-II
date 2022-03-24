import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './homec.css';
import { FacebookComment } from "./facebookcomm";

const Home = ()=>{
    return (
        <div className="d-flex justify-content-center row col-lg-9 col-md-9 col-sm-9 pt-4" style={{marginTop:"59px"}}>
<FacebookComment></FacebookComment>
        <div className="col-md-8 pt-5">
            <div className="d-flex flex-column comment-section">
                <div className="bg-white p-2">
                    <div className="d-flex flex-row user-info"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                        <div className="d-flex flex-column  ml-3">
                            <span class="d-block font-weight-bold name" style={{paddingLeft:"5px"}}>Marry Andrews</span>
                            <span class="date text-black-50" style={{paddingLeft:"5px"}}>Shared publicly - Jan 2020</span></div>
                    </div>
                    <div className="mt-2">
                        <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="d-flex flex-row fs-12">
                        <div className="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div>
                        <div className="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1">Comment</span></div>
                        <div className="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div>
                    </div>
                </div>
                <div className="commentsofComments bg-white scrollycomments">
               <div class="d-flex flex-row comment-row">
                        <div class="p-2"><span class="round"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" alt="user" width="40"/></span></div>
                        <div class="comment-text pt-2">
                        <span class="d-block font-weight-bold name">Marry Andrews</span>
                            <div class="comment-footer"> <span class="date">April 14, 2019</span> <span class="label label-info">Pending</span> <span class="action-icons"> <a href="#" data-abc="true"><i class="fa fa-pencil"></i></a> <a href="#" data-abc="true"><i class="fa fa-rotate-right"></i></a> <a href="#" data-abc="true"><i class="fa fa-heart"></i></a> </span> </div>
                            <p class="m-b-5 m-t-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                        </div>

                    </div>
                
               
                </div>
                <div className="bg-light p-2">
                    <div className="d-flex flex-row align-items-start"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/><textarea class="form-control ml-1 shadow-none textarea"></textarea>
                    <div className="m-2 align-items-center">
                        <a class=" zoom btn btn-outline-primary btn-sm  shadow-none ml-4" type="button">Comentar</a>
                        </div>
                        </div>
                    <div className="mt-2 pl-5 d-flex justify-content-start">
            
                     </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;
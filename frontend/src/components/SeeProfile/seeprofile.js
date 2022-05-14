import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './seeprofile.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Images } from "./photo";
import Half from "./ImageP";
const profileco = ()=>{
 
    return (
        
        <div className="texttypeLight300 colorbk heigh  " style={{marginTop:"59px"}}>
         <div className="d-flex row">
         <div className=" m-5 col-lg-8 scrollyc">
        
        <div className=" col-lg-12 pt-3" >
             <div className=" flex-row card">  
           
              <div className=" row align-items-center text-center col-lg-12 m-2"  >
             
   <div className="row">
   <div className="col-lg-4 row text-center mx-auto m-1">
<img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="10"/>
</div>

    <h1>TrickyPS</h1>
    <div className="d-flex  justify-content-center border rounded ">
                       
                            <div class="col-sm-3 border-right m-3">
                                <div class="description-block">
                                    <h5 class="description-header">3,200</h5> <span class="description-text">Preguntas</span>
                                </div>
                            </div>
                            <div class="col-sm-3 m-3 border-right">
                                <div class="description-block">
                                    <h5 class="description-header">13,000</h5> <span class="description-text">Respuestas</span>
                                </div>
                            </div>
                            <div class="col-sm-3 m-3">
                                <div class="description-block">
                                    <h5 class="description-header">35</h5> <span class="description-text">Reacciones</span>
                                </div>
                            </div>
                          
    </div>
   </div>
      
      
</div>



</div>






  </div>

        </div>
        <Half></Half> 
        
         </div>
        
       

   
     
   
        </div>
    )
}

export default profileco;
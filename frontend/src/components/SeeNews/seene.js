import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Editor } from "react-draft-wysiwyg";
import './seene.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Half from "./ImageP";
const SeeNews = ()=>{
    return (
        <div className="  " style={{marginTop:"59px"}}>
          <div className="d-flex row heigh ">
    
    <div className="texttypeLight300 m-5 col-lg-8 col-md-12 col-sm-12 ">
      <div className="container scrollyca card">
      <h1 className="pt-3 text-center texttypeBebas">Nombre de la noticia</h1>
      <div className="m-3">
      <img src="https://i.imgur.com/RpzrMR2.jpg"alt=""  className="mx-auto
        d-none d-xs-none d-sm-none d-md-none d-lg-block col-sm-12 col-md-12 col-lg-12 backImgs"/>
      </div>

      <p className=" text-right pt-2 textisize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae dolores tempora, in ipsam ea eius corrupti nemo eveniet veniam ipsum provident doloremque voluptatibus vel, quasi ad similique consequuntur ratione commodi, asperiores repellat dolorum. Earum suscipit quia odit tenetur accusantium tempora ad minima qui numquam impedit. Assumenda incidunt magnam necessitatibus consequuntur. Quibusdam perferendis dolores aspernatur cupiditate labore, cum consectetur qui error laborum incidunt id debitis iure quam provident quod corporis doloremque numquam at dolorem quo aliquam rerum maxime. Et quas reiciendis tenetur quisquam hic est commodi? Laudantium eveniet aut incidunt distinctio? Iure voluptates, natus quos iste quaerat dolores corrupti debitis!</p>
      <p className=" text-right pt-2 textisize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae dolores tempora, in ipsam ea eius corrupti nemo eveniet veniam ipsum provident doloremque voluptatibus vel, quasi ad similique consequuntur ratione commodi, asperiores repellat dolorum. Earum suscipit quia odit tenetur accusantium tempora ad minima qui numquam impedit. Assumenda incidunt magnam necessitatibus consequuntur. Quibusdam perferendis dolores aspernatur cupiditate labore, cum consectetur qui error laborum incidunt id debitis iure quam provident quod corporis doloremque numquam at dolorem quo aliquam rerum maxime. Et quas reiciendis tenetur quisquam hic est commodi? Laudantium eveniet aut incidunt distinctio? Iure voluptates, natus quos iste quaerat dolores corrupti debitis!</p>
      </div>

     </div>
     


   <Half></Half>


   
     
      </div>
   
     
     
        
       
        </div>
    )
}

export default SeeNews;
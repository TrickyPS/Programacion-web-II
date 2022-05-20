import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './seeprofile';
export function Images() {
    const [file, setFile] = useState();
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
    return (
        <div className="">
       
            <div className="file-select" id="src-file1">
               <input className="zoom" type="file" onChange={handleChange}   /> 
            </div>
            <img src={file} />
        </div>
  
    );
}
  
export default Images;
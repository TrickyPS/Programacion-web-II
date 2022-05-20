import React,{useContext,useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './seeprofile.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Images } from "./photo";
import Half from "./../Profile/ImageP";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Context from "../../context/userContext";
import { getOne, getOtherUser } from "../../api/user";
import defaultImg from "./../../assets/user.png"
import { getAllMyFavoritesApi, getAllOtherPostsApi } from "../../api/posts";
const Profileco = ()=>{
    const {accessToken,user} =useContext(Context)

    const navigate = useNavigate()
    const [data,setData] = useState()
    const params = useParams()
    const [reactions,setReactions] = useState(0)
    const [myQuestions,setMyQuestions] = useState([])
    

    useEffect(()=>{
        if(params?.id){
            (async()=>{
                const response = await getOtherUser({id:params?.id})
                if(response.success){
                    setData(response.data)
                }else{
                    navigate("/")
                }

                const data = await getAllOtherPostsApi({id:params.id})
                if(data.success){
                  setMyQuestions(data?.data)
                  var count = 0;
                  data.data.forEach(item=>{
                      count += item.reactions.length;
                  })
                  setReactions(count)
                }
            })()
        }else{
            navigate("/")
        }
    },[])

    return (
        
        <div className="texttypeLight300 container colorbk heigh  " style={{marginTop:"59px"}}>
         <div className="d-flex row">
         <div className=" mt-5 col-lg-8 scrollyc">
        
        <div className=" col-lg-12 " >
             <div className=" flex-row card">  
           
              <div className=" row align-items-center text-center col-lg-12 m-2"  >
             
   <div className="row">
   <div className="col-lg-4  text-center mx-auto ">
<img className="rounded-circle" src={data?.image || defaultImg} style={{width:"90px",height:"90px",objectFit:"cover"}}/>
</div>

    <h1>{data?.userName}</h1>
    <div className="d-flex  justify-content-center border rounded ">
                       
                            <div className="col-sm-3 border-right m-3">
                                <div className="description-block">
                                    <h5 className="description-header">{myQuestions?.length || 0}</h5> <span className="description-text">Preguntas</span>
                                </div>
                            </div>
                            <div className="col-sm-3 m-3 border-right">
                                <div className="description-block">
                                    <h5 className="description-header">{data?.stars.length || "0"}</h5> <span className="description-text">{data?.stars.length === 1 ?"Estrella":"Estrellas"}</span>
                                </div>
                            </div>
                            <div className="col-sm-3 m-3">
                                <div className="description-block">
                                    <h5 className="description-header">{reactions || 0}</h5> <span className="description-text">Reacciones</span>
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

export default Profileco;
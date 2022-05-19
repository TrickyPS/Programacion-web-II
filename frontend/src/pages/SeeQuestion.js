import '../components/AddNews/news.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../components/Layout/NavBar';
import Half from "./../components/Profile/ImageP"
import { useContext, useEffect, useState } from 'react';
import { addCategory } from '../api/category';
import Context from '../context/userContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Question } from '../components/Home/homec';
import { useNavigate, useParams } from 'react-router-dom';
import { getOnePostsApi } from '../api/posts';

const SeeQuestion = ()=>{

    const {accessToken,user} = useContext(Context)
    const [name,setName] = useState("")
    const navigate = useNavigate()
    const [data,setData] = useState()
    const params = useParams()
    

    useEffect(()=>{
        if(params?.id){
            (async()=>{
                const response = await getOnePostsApi({id:params.id})
                console.log(response);
                if(response.success){
                    setData(response.data)
                }else{
                    navigate("/")
                }
            })()
        }else{
            navigate("/")
        }
    },[])

    return (
        <div className="over colorbk">
    
    
        <NavBar/>
        <div className=" heigh texttypeLight300 container " style={{marginTop:"59px"}}>
        <div className="row heigh  textisize">
        
<div className="texttypeBebas mt-5 editor col-lg-8 align-self">
  
    
 {
     data &&
     <Question data={data} />
 }
  

    </div>

        <Half></Half>
        </div>
        
        
        </div>
        </div>
    )
}

export default SeeQuestion;
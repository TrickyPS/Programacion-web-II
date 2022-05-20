import '../components/AddNews/news.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../components/Layout/NavBar';
import Half from "./../components/Profile/ImageP"
import { useContext, useState,useEffect } from 'react';
import Context from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { bestCategoryApi, bestReactionsAPi, postsByUserRankApi, rankStarsApi } from '../api/reportes';
import imgDefault from "./../assets/user.png"
import { BiUpArrow,BiDownArrow} from 'react-icons/bi';
const ReportesPage = ()=>{

    const {accessToken,user} = useContext(Context)
    const [rankStar,setRankStar] = useState([])
    const [rankReaction,setRankReaction] = useState([])
    const [rankPosts,setRankPosts] = useState([])
    const [rankCat,setRankCat] = useState([])
    const [showStar,setShowstar] = useState(true)
    const [showReact,setShowReact] = useState(true)
    const [showPosts,setShowPosts] = useState(true)
    const [showCats,setShowCats] = useState(true)
    const navigate = useNavigate()

    useEffect(()=>{
      if(!accessToken){
        navigate("/login")
      }
    },[accessToken])

   useEffect(()=>{
        
        (async()=>{
            const responseRank = await rankStarsApi({token:accessToken})
            if(responseRank.success){
              console.log(responseRank.data);
                setRankStar(responseRank.data)
            }

        })()
   },[])

   useEffect(()=>{
        
    (async()=>{
        const responseRank = await bestReactionsAPi({token:accessToken})
        if(responseRank.success){
          console.log(responseRank.data);
            setRankReaction(responseRank.data)
        }

    })()
},[])

useEffect(()=>{
        
  (async()=>{
      const responseRank = await postsByUserRankApi({token:accessToken})
      if(responseRank.success){
        console.log(responseRank.data);
         setRankPosts(responseRank.data)
      }

  })()
},[])

useEffect(()=>{
        
  (async()=>{
      const responseRank = await bestCategoryApi({token:accessToken})
      if(responseRank.success){
        console.log(responseRank.data);
         setRankCat(responseRank.data)
      }

  })()
},[])


    return (
        <div className="over colorbk">
    
    
        <NavBar/>
        <div className=" heigh texttypeLight300 container  " style={{marginTop:"59px"}}>
        <div className="row  textisize">
        
      
        <div className="texttypeBebas mt-5 mb-5 editor row col-lg-8 align-self">
    <div className="col-12">
        <div className='d-flex justify-content-between' >
        <h1>Top 5 mejores contribuidores</h1> 
        <button onClick={()=>setShowstar(!showStar)} className='btn ' > 
          {showStar?
          <BiUpArrow fontSize={"30px"} ></BiUpArrow>:
          <BiDownArrow fontSize={"30px"} ></BiDownArrow>}
        </button>
        </div>
        <hr />
   {
     showStar &&
     <table className="table align-middle mb-0 bg-white">
     <thead className="bg-light">
       <tr>
         <th>Usuario</th>
         <th>Estado</th>
         <th>Posición</th>
         <th>Estrellas</th>
       </tr>
     </thead>
     <tbody>
         {
           rankStar.map((item,index)=>(
             <tr key={index} >
             <td>
               <div className="d-flex align-items-center">
                 <img
                     src={item?.image || imgDefault}
                     alt=""
                     style={{width: "45px", height: "45px",objectFit:"cover"}} 
                     className="rounded-circle"
                     />
                 <div className="ms-3">
                   <p className="fw-bold mb-1">{item?.userName}</p>
                   <p className="text-muted mb-0">{item?.email}</p>
                 </div>
               </div>
             </td>
            
             <td>
               {
                 item?.status ? 
                 <span className="badge bg-success rounded-pill d-inline">Activo</span>:
                 <span className="badge bg-danger rounded-pill d-inline">Inactivo</span>
               }
             </td>
             <td>{index+1}</td>
             <td>{item?.stars.length || 0}</td>
            
           </tr>
           ))
         }
       
     </tbody>
       </table>
   }
    </div>

    <div className="col-12 mt-5">
        <div className='d-flex justify-content-between' >
        <h1>Top mejores preguntas con más reaccciones</h1> 
        <button onClick={()=>setShowReact(!showReact)} className='btn ' > 
          {showReact?
          <BiUpArrow fontSize={"30px"} ></BiUpArrow>:
          <BiDownArrow fontSize={"30px"} ></BiDownArrow>}
        </button>
        </div>
        <hr />
   {
     showReact &&
     <table className="table align-middle mb-0 bg-white">
     <thead className="bg-light">
       <tr>
         <th>Usuario</th>
         <th>Posición</th>
         <th>Reacciones</th>
         <th>Categoria</th>
         <th></th>
       </tr>
     </thead>
     <tbody>
         {
           
           rankReaction.map((item,index)=>(
             <tr key={index} >
             <td>
               <div className="d-flex align-items-center">
                 <img
                     src={item?.user.image || imgDefault}
                     alt=""
                     style={{width: "45px", height: "45px",objectFit:"cover"}} 
                     className="rounded-circle"
                     />
                 <div className="ms-3">
                   <p className="fw-bold mb-1">{item?.user.userName}</p>
                   <p className="text-muted mb-0">{item?.user.email}</p>
                 </div>
               </div>
             </td>
            
            
             <td>{index+1}</td>
             <td>{item?.reactions.length || 0}</td>
             <td>{item?.category.name }</td>
             <td>
             <button onClick={()=>navigate(`/SeeQuestion/${item?._id}`)} className="colorWhite buttonColorsNav zoom btn btn-outline-primary btn-sm  shadow-none m-2 " type="button" >
   Ver</button>
             </td>
            
            
           </tr>
           ))
         }
       
     </tbody>
       </table>
   }
    </div>

    <div className="col-12 mt-5">
        <div className='d-flex justify-content-between' >
        <h1>Top mejores usuarios con más preguntas</h1> 
        <button onClick={()=>setShowPosts(!showPosts)} className='btn ' > 
          {showPosts?
          <BiUpArrow fontSize={"30px"} ></BiUpArrow>:
          <BiDownArrow fontSize={"30px"} ></BiDownArrow>}
        </button>
        </div>
        <hr />
   {
     showPosts &&
     <table className="table align-middle mb-0 bg-white">
     <thead className="bg-light">
       <tr>
         <th>Usuario</th>
         <th>Posición</th>
         <th>Reacciones</th>
       </tr>
     </thead>
     <tbody>
         {
           
           rankPosts.map((item,index)=>(
             <tr key={index} >
             <td>
               <div className="d-flex align-items-center">
                 <img
                     src={item?.user.image || imgDefault}
                     alt=""
                     style={{width: "45px", height: "45px",objectFit:"cover"}} 
                     className="rounded-circle"
                     />
                 <div className="ms-3">
                   <p className="fw-bold mb-1">{item?.user.userName}</p>
                   <p className="text-muted mb-0">{item?.user.email}</p>
                 </div>
               </div>
             </td>
            
            
             <td>{index+1}</td>
             <td>{item?.posts}</td>
            
            
            
           </tr>
           ))
         }
       
     </tbody>
       </table>
   }
    </div>

    <div className="col-12 mt-5">
        <div className='d-flex justify-content-between' >
        <h1>Mejores categorias </h1> 
        <button onClick={()=>setShowCats(!showCats)} className='btn ' > 
          {showCats?
          <BiUpArrow fontSize={"30px"} ></BiUpArrow>:
          <BiDownArrow fontSize={"30px"} ></BiDownArrow>}
        </button>
        </div>
        <hr />
   {
     showCats &&
     <table className="table align-middle mb-0 bg-white">
     <thead className="bg-light">
       <tr>
         <th>Categoría</th>
         <th>Preguntas</th>
       </tr>
     </thead>
     <tbody>
         {
           
           rankCat.map((item,index)=>(
             <tr key={index} >
             <td>
                {item?.category.name}
             </td>
            
             <td>{item?.posts}</td>
            
            
            
           </tr>
           ))
         }
       
     </tbody>
       </table>
   }
    </div>
   

</div>
      

        <Half></Half>
        </div>
        
        
        </div>
        </div>
    )
}

export default ReportesPage;
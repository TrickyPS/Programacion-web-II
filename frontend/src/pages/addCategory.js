import '../components/AddNews/news.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../components/Layout/NavBar';
import Half from "./../components/Profile/ImageP"
import { useContext, useState } from 'react';
import { addCategory } from '../api/category';
import Context from '../context/userContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCategory = ()=>{

    const {accessToken} = useContext(Context)
    const [name,setName] = useState("")

    const handleAddCategory=async()=>{
        if(name){
            const response = await addCategory({token:accessToken,name})
            if(response.success) {
               toast.success(response.message || "Ha ocurrido un error", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
                setName("")
                
             }
              else
              toast.error(response.message || "Ha ocurrido un error", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }


    return (
        <div className="over colorbk">
            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>  
<ToastContainer />
    
        <NavBar/>
        <div className=" heigh texttypeLight300 " style={{marginTop:"59px"}}>
        <div className="row heigh  textisize">
        
<div className="texttypeBebas m-5 editor col-lg-8 align-self">
    <div className="card">
    <div className="title col-lg-10 mx-auto pt-3 text-center ">
<h4 className="">Agregar Categoria</h4>
    </div>
    
    <div className="title col-lg-10 mx-auto m-5">
        <div className=" mb-3">
   <span>Nombre de la categoria</span>
        </div>
    <input type="text" className="form-control inputwidh " name="categoria12"  value={name} onChange={(e)=>setName(e.target.value)}
                                placeholder="Ingresa el nombre " />
    </div>
    
    <div className="col-lg-10 mx-auto m-5">
    <div  onClick={handleAddCategory} className="perfil zoom btn colorWhite text-center buttonColorsNav  d-block" style={{marginRight:"15px"}}> Agregar</div>
    </div>
   
    </div>
  

</div>

        <Half></Half>
        </div>
        
        
        </div>
        </div>
    )
}

export default AddCategory;
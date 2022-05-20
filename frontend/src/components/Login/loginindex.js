import React,{useState,useContext} from "react";
import img from './peopletog.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './loginind.css';
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import Context from "../../context/userContext";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../api/config";
const Login = ()=>{

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loadin,setLoading] = useState(false)
    const {setAccessToken, setRefreshToken} = useContext(Context)
    const [vEmail,setVEmail] = useState(false)
    const [vPass,setVPass] = useState(false)
    const navigate = useNavigate()

    const handleLogin = async(e)=>{
        e.preventDefault()

        if(password.length < 8){
            setVPass(true)
          }else
            setVPass(false)
      
          if(email === ""){
            setVEmail(true)
          }else
          setVEmail(false)
        setLoading(true)
    if(email && password && password.length >= 8){
      const data = await login({email,password})
      if(data.success)
     {
        setAccessToken(data.data?.accessToken)
        setRefreshToken(data.data?.refreshToken)
        localStorage.setItem(ACCESS_TOKEN,data.data?.accessToken)
        localStorage.setItem(REFRESH_TOKEN,data.data?.refreshToken)
       toast.success(data.message || "Ha ocurrido un error", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
        navigate("/")
        
     }
      else
      toast.error(data.message || "Ha ocurrido un error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    setLoading(false)
    }


    return (
      <div  className="heigh" style={{paddingTop:'0px'}}>
                
      <div className=" colorbk heigh " style={{marginTop:"59px"}}>
<div className="row heigh"  >
<img src={img} alt=""  className="h-auto colorbk d-none d-xs-none d-sm-none d-md-none d-lg-block col-sm-12 col-md-12 col-lg-7 backImg"/>
<form onSubmit={handleLogin} style={{overflow:"scroll"}} className="col-md-12 col-lg-5 col-sm-12 backLogin align-self-center justify-content-center justify-content-lg-center texttypeLight300" >
 <div className="text-center mb-5 col-lg-8 col-md-10 col-sm-10 mx-auto">
 <h2 className="textisizetitleu texttypeBebas">Inicia sesion en geekup</h2>
 <span className="textisizetitle">La mejor comunidad  de programacion te espera</span>
 </div>
          
                   <div className="form-group p-4 col-lg-8 col-md-10 col-sm-10 col-xs-4 mx-auto">
                       <div className="pb-2">
                       <span className="textisize paddingbot ">Correo</span>
                       </div>
                       
                       <input type="email" className="form-control inputwidh " name="correosign" value={email} onChange={(e)=>setEmail(e.target.value)}
                           placeholder="Ingresa tu correo" />
                   </div>
                   {
                          vEmail &&
                          <div className="text-center">
                            <span className="text-danger"  >El correo es requerido</span>
                          </div>
                        }

                   <div className="form-group p-4 col-lg-8 col-md-10 col-sm-10 col-xs-4 mx-auto">
                       <div className="pb-2">
                       <span className="textisize paddingbot ">Contraseña</span>
                       </div>
                       
                       <input type="password" className="form-control inputwidh " name="contraseñasign" value={password} onChange={(e)=>setPassword(e.target.value)}
                           placeholder="Ingresa tu contraseña" />
                   </div>
                   <div className="text-center">
                        <span className={`${vPass && "text-danger"}`}  >Tu contraseña debe tener mínimo  8 carácteres</span>
                        </div>

               
                   <div className="grupo text-center pt-3 ">
                   <input value={`${loadin? "Espere...":"Iniciar Sesión"}`}   className={` ${loadin && "disabled"} colorWhite buttonColorsNav zoom btn  btn-sm  shadow-none m-2`}  type="submit" style={{width:"300px",height:"35px"}}/>

                   </div>





</form>
</div>


</div>
   </div>
    )
}

export default Login;
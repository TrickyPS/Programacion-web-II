import React, { useState } from "react";
import './registerind.css';
import img from './peopletog.jpg';
import { register } from "../../api/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom"

const Register = ()=>{

  const [userName,setUserName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loadin,setLoading] = useState(false)
  const navigate = useNavigate()
  const [vUser,setVUser] = useState(false)
  const [vEmail,setVEmail] = useState(false)
  const [vPass,setVPass] = useState(false)
 

  const handleRegister = async(e)=>{
    e.preventDefault();
    setLoading(true)
    if(password.length < 8){
      setVPass(true)
    }else
      setVPass(false)
    if(userName === ""){
      setVUser(true)
    }else
    setVUser(false)

    if(email === ""){
      setVEmail(true)
    }else
    setVEmail(false)
    if(userName && email && password && password.length >= 8){
      
      const data = await register({userName,email,password})
      
      if(data.success)
     {
       toast.success(data.message || "Iniciaste sesión correctamente", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
        navigate("/login") 
        
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
       
           <div className=" colorbk heigh  " style={{marginTop:"59px"}}>
  <div className="row heigh ">
    <form onSubmit={handleRegister}  style={{overflow:"scroll"}}   className="col-md-12 col-lg-5 col-sm-12 backLogin align-self-center justify-content-center justify-content-lg-center texttypeLight300" >
      <div className="text-center mb-5 col-lg-8 col-md-10 col-sm-10 mx-auto">
      <h2 className="textisizetitleu texttypeBebas">Unete a geekup</h2>
      <span className="textisizetitle">Obten mejores oportunidades y privilegios registrandote a nuestra comunidad</span>
      </div>
                          <div className="form-group p-4 col-lg-8 col-md-10 col-sm-10 col-xs-4 mx-auto">
                            <div className="pb-2">
                            <span className="textisize paddingbot ">Nombre de usuario</span>
                            </div>
                            
                            <input type="text" className="form-control inputwidh" name="nombresign" value={userName} onChange={(e)=>setUserName(e.target.value)}
                                placeholder="Ingresa como te gustaría que te conozcan" />
                        </div>

                        {
                          vUser &&
                          <div className="text-center">
                            <span className="text-danger"  >El nombre de usuario es requerido</span>
                          </div>
                        }

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
                   <input value={`${loadin? "Espere...":"Registrase"}`}   className={` ${loadin && "disabled"} colorWhite buttonColorsNav zoom btn  btn-sm  shadow-none m-2`}  type="submit" style={{width:"300px",height:"35px"}}></input>

                   </div>

    
  



    </form>

        
  <img src={img} alt=""  className="h-auto colorbk d-none d-xs-none d-sm-none d-md-none d-lg-block col-sm-12 col-md-12 col-lg-7 backImg"/>
</div>
    
  
</div>
        </div>
    )
}

export default Register;
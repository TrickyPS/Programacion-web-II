import React, { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

import { MdNotificationsActive } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaRocket } from 'react-icons/fa';
import { BiExit ,BiNews,BiCategory} from 'react-icons/bi';
import './Navbar.css';
import imgLogo from "./../../assets/logo-blanco.png";
import defaultImg from "./../../assets/user.png";
import { Link, useNavigate } from "react-router-dom";
import Context from "../../context/userContext";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../api/config";
import { seeNotiApi } from "../../api/noti";
import { getOne } from "../../api/user";

const NavBar = ()=>{
    const [hover,setHover] =useState(false)
    const [notiHover,setNotiHover] =useState(false)
    const {user,setAccessToken,setRefreshToken,setUser,accessToken,search,setSearch} = useContext(Context)
    const navigate = useNavigate()
    const handleLogOut = ()=>{
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);
      setAccessToken(null)
      setRefreshToken(null)
      setUser(null)
      navigate("/login")
    }

    const handleSeeNoti = async()=>{
      if(user){
          if(user?.notifications.filter(a=>a.seen===false).length > 0){
             await seeNotiApi({token:accessToken})
          }
      }else{
        navigate("/login")
      }
    }



    return ( 
      <nav className="navbar navbar-light bg-light  fixed-top backgroundcolor colorWhite " >   
   
      <div className="container-fluid texttypeBebas d-flex" > 
         <Link className="navbar-brand  colorWhite" to="/" style={{fontSize:"25px"}} >
           <img src={imgLogo} width={110} alt="" /></Link>

         <Link to="/ViewNews" className="perfil zoom  colorWhite   d-none d-xs-none d-sm-none  d-lg-block" style={{marginRight:"20px",marginLeft:"20px",textDecoration:"none"}}>
            
        <span className=""  >Noticias</span>
          </Link>

         <Link to="/home" className="perfil zoom  colorWhite   d-none d-xs-none d-sm-none  d-lg-block" style={{marginRight:"20px",marginLeft:"20px",textDecoration:"none"}}>
            
            <span className=""  >Explorar</span>
              </Link>
         <div className="d-flex mx-auto ">

              <input value={search} onChange={(e)=>setSearch(e.target.value)} style={{width:"300px"}} className="form-control me-2  d-none d-sm-none d-md-none d-lg-block " type="search" placeholder="Buscar" aria-label="Search"/>
              <div onClick={()=>navigate("/ViewNews")} className="perfil zoom btn colorWhite text-center buttonColorsNav d-none d-sm-none d-md-none d-lg-block" style={{marginRight:"15px"}}>
            
        <span   >Buscar</span>
          </div>
         
         </div>
         
       {
         !user && 
         <>
              <Link to="/login" className="perfil zoom btn colorWhite  buttonColorsNav d-none d-xs-none d-sm-none  d-lg-block" style={{marginRight:"20px"}}>
            
            <span className=""  >Inicia sesion</span>
              </Link>
          
        <Link to="/register" className="perfil zoom btn colorWhite  buttonColorsNav d-none d-xs-none d-sm-none  d-lg-block" style={{marginRight:"20px"}}>
            
        <span className=""  >Registrate</span>
          </Link>
         </>
       }
          <Link to="/question" className="perfil zoom btn colorWhite text-center buttonColorsNav d-none  d-xs-none  d-sm-none d-lg-block"  >
            
            <span className="pt-4" >Preguntar <FaRocket  style={{color:"white"}} /></span>
          </Link>
          {
            user &&
            <button onMouseEnter={()=>{setNotiHover(true);handleSeeNoti()}} onMouseLeave={()=>setNotiHover(false)}  className="btn zoom d-none  d-xs-none  d-sm-none d-lg-block position-relative" >
              <div className="position-relative">
              <MdNotificationsActive   className="" style={{fontSize:"30px",color:"white"}} />
              {
                user?.notifications.filter(a=>a.seen === false).length > 0 &&
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                     {user?.notifications.filter(a=>a.seen === false).length}
                    <span class="visually-hidden">unread messages</span>
                </span>
              }
              </div>
              {
                notiHover &&
                <div  className="position-absolute    d-flex align-items-center  flex-column rounded drop-navbar-dark-bg " style={{top:"100%",left:"-250px",width:"300px",height:"300px"}}  > 
                  <div class="header-noti" >Notificaciones</div>
                  <div className="w-100 noti-bg h-100 " style={{overflowY:"auto"}} >
                  {
                    user.notifications.map((item,index)=>(
                      <div className={`text-white item-noti d-flex px-2 align-items-center ${item?.seen ? "":"no-seen"} `}  key={index} >
                        <img src={item?.user.image ? item?.user.image:defaultImg} className="rounded-circle " style={{width:"40px",height:"40px",objectFit:"cover",marginRight:"3px"}} alt="" />
                        <div> {item?.user.userName} {item.text} </div>
                        </div>
                    )).reverse()
                  }
                  </div>
                </div>
              }
              </button>
              
          }  
          {
            user && 
            <div className="perfil zoom btn colorWhite position-relative" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} >
            <img src={user?.image || defaultImg} style={{width:"33px",height:"33px",objectFit:"cover",marginRight:"10px"}} className=" rounded-circle" ></img>
            <span className="" style={{paddingRight:"10px"}}>{user? user.userName || user.email:""}</span>
           {
             hover &&
          
               <div  className="position-absolute   w-100 d-flex align-items-center justify-content-center flex-column  drop-navbar-dark-bg " style={{top:"100%"}}  > 
                {
                user.userType === 0 &&
               <>
                 <div onClick={()=>navigate("/news")}  className="text-white  w-100 drop-navbar-dark " ><BiNews style={{marginRight:"3px"}} /> Noticia  </div>
                <div onClick={()=>navigate("/addCategory")}  className="text-white  w-100 drop-navbar-dark " ><BiCategory style={{marginRight:"3px"}} /> Categoria  </div>
               </>
              }
               <div onClick={handleLogOut} className="text-danger  w-100  drop-navbar-dark" ><BiExit style={{marginRight:"3px"}} /> Salir  </div>
               
             
               
               </div>
               
           

           }
          </div>
          }
        
  
  
     
        <a className="navbar-toggler colorWhite   d-lg-none zoom" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <GiHamburgerMenu  className="mb-1" style={{fontSize:"25px",color:"white"}} />
        </a>
        <div className="offcanvas offcanvas-start " tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header backgroundcolorOfftitle">
            <h5 className="offcanvas-title mx-auto" id="offcanvasNavbarLabel">Menu de opciones</h5>
            <a type="button" className=" text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
            <AiOutlineClose  className="mb-1" style={{fontSize:"25px",color:"white"}} />
            </a>
          </div>
          <div className="offcanvas-body backgroundcolorOff " >
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mb-4" >

              <li className="nav-item ">
                <a className="btn nav-link active btn zoom colorWhite" aria-current="page" href="#">Explorar</a>
              </li>
              
              <li className="nav-item ">
                <a className="btn nav-link active btn zoom colorWhite" aria-current="page" href="#">Noticias</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link btn zoom colorWhite" href="#">Preguntar</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn zoom colorWhite" href="#">Mi Perfil</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <div className="perfil zoom btn colorWhite text-center buttonColorsNav" >
            
        <span className=""  >Buscar</span>
          </div>
            </form>
          </div>
        </div>
      </div>
    </nav>
    )
}

export default NavBar
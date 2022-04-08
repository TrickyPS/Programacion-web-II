import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import { MdNotificationsActive } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaRocket } from 'react-icons/fa';
import './Navbar.css';
import imgLogo from "./../../assets/logo-blanco.png";

const NavBar = ()=>{
    return ( 
      <nav className="navbar navbar-light bg-light  fixed-top backgroundcolor colorWhite " >   
   
      <div className="container-fluid texttypeBebas" > 
         <a className="navbar-brand  colorWhite" href="#" style={{fontSize:"25px"}} ><img src={imgLogo} width={110} alt="" /></a>

         <div className="perfil zoom  colorWhite   d-none d-xs-none d-sm-none  d-lg-block" style={{marginRight:"20px",marginLeft:"20px"}}>
            
        <span className=""  >Noticias</span>
          </div>

         <div className="perfil zoom  colorWhite   d-none d-xs-none d-sm-none  d-lg-block" style={{marginRight:"20px",marginLeft:"20px"}}>
            
            <span className=""  >Explorar</span>
              </div>
         <div className="d-flex mx-auto ">

              <input style={{width:"300px"}} className="form-control me-2  d-none d-sm-none d-md-none d-lg-block " type="search" placeholder="Buscar" aria-label="Search"/>
              <div className="perfil zoom btn colorWhite text-center buttonColorsNav d-none d-sm-none d-md-none d-lg-block" style={{marginRight:"15px"}}>
            
        <span className=""  >Buscar</span>
          </div>
         
         </div>
         
         <div className="perfil zoom btn colorWhite  buttonColorsNav d-none d-xs-none d-sm-none  d-lg-block" style={{marginRight:"20px"}}>
            
            <span className=""  >Inicia sesion</span>
              </div>
          
        <div className="perfil zoom btn colorWhite  buttonColorsNav d-none d-xs-none d-sm-none  d-lg-block" style={{marginRight:"20px"}}>
            
        <span className=""  >Registrate</span>
          </div>
          <div className="perfil zoom btn colorWhite text-center buttonColorsNav d-none  d-xs-none  d-sm-none d-lg-block"  >
            
        <span className="pt-4" >Preguntar <FaRocket  className="" style={{color:"white"}} /></span>
          </div>
          <button  className="btn zoom d-none  d-xs-none  d-sm-none d-lg-block" style={{}}>
      <MdNotificationsActive  className="" style={{fontSize:"30px",color:"white"}} />
        </button>  
          <div className="perfil zoom btn colorWhite ">
            <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="33" height="33" className=" rounded-circle" style={{marginRight:"10px"}}></img>
        <span className="" style={{paddingRight:"10px"}}>TrickyPS</span>
          </div>
        
  
  
     
        <a className="navbar-toggler colorWhite   d-lg-none zoom" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <GiHamburgerMenu  className="mb-1" style={{fontSize:"25px",color:"white"}} />
        </a>
        <div className="offcanvas offcanvas-start " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
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
import React from "react";
import NavBar from "../components/Layout/NavBar";
import Loginindex from "../components/Login/loginindex";
import './Login.css'
const Login = ()=>{
    return (
        <div className="over colorbk fillImg  ">
             <NavBar></NavBar>
    <Loginindex></Loginindex>
        </div>
    )
}

export default Login;
const jwt = require('../services/jwt');
const moment = require('moment');
const User = require('../models/user.model');

function willExpireToken(token){
    const {exp} = jwt.decodedToken(token);
    const currentDate = moment().unix();

    if(currentDate > exp){
        return true;
    }
    return false;
}

function refreshAccessToken(req, res){
    const {refreshToken} = req.body;
    const isTokenExpired = willExpireToken(refreshToken);
    
    if(isTokenExpired){
        res.status(404).send({message: "El token de acceso ha expirado."});
    }else{
        const {id} = jwt.decodedToken(refreshToken);
        User.findOne({_id: id}, (err, userStored) =>{
            if(err){
                res.status(500).send({message: "Error del servidor."});
            }else{
                if(!userStored){
                    res.status(404).send({message: "Usuario no encontrado."});
                }else{
                    res.status(200).send({
                        accessToken: jwt.createAccessToken(userStored),
                        refreshToken: refreshToken
                    });
                }
            }
        });
    }
}


const signUp = async (req, res) => {
    try {
      const { userName,password,email } = req.body;
      if(!userName || !password || !email)
        return res.status(400).send({message:"Los datos del usuario son invalidos, provee  un userName, password, email",data:null})

      const existUser = await User.findOne({email})
      if(existUser)
        return res.send({message:"Un usuario con este correo ya existe",data:null})
      const newUser = new User({userName,password,email})
      await newUser.coderPassword()
      const user = await newUser.save()
      if(!user)
        return res.status(500).send({message:"Error interno al registrar usuario. Vuelve a intentarlo",data:null})
      res.send({message:"Registro exitoso",data:true})
        
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Error interno del servidor",data:null });
    }
  };
  
const logIn = async(req, res) => {
    try{
      const {email,password} = req.body 
      if(!email || !password)
          return res.status(404).send({message:"Se debe enviar email y password",data:null})
          
      const user = await User.findOne({email}).populate("favorites");
      if(!user)
          return res.send({message:"No existe el usuario",data:null})
      const matchPassword = await user.comparePassword(password);
      if(!matchPassword)
        return res.send({message:"El password es incorrecto",data:null});
       res.send({data:{
        accessToken: jwt.createAccessToken(user), 
        refreshToken: jwt.createRefreshToken(user)
      },message:"Ingresaste correctamente"});
    }catch(error){
      console.log(error);
      res.send({ message: "Error interno del servidor" }).end();
    }
  };

module.exports = {
    refreshAccessToken,
    logIn,
    signUp
}
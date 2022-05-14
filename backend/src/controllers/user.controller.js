const userModel = require("./../models/user.model");
const jwt = require('../services/jwt');

exports.getAll = async(req, res) => {
  try {
    const users = await userModel.find().populate("favorites");
    return res.send({ data: users });
  } catch (err) {
    console.log(err);
    res.send({ message: err });
  }
};

exports.signUp = async (req, res) => {
  try {
    const { userName,password,email } = req.body;
    if(!userName || !password || !email)
      return res.status(400).send({message:"Los datos del usuario son invalidos, provee  un userName, password, email",data:null})
    const newUser = new userModel({userName,password,email})
    await newUser.coderPassword()
    const user = await newUser.save()
    if(!user)
      return res.status(500).send({message:"Error interno al registrar usuario. Vuelve a intentarlo",data:null})
    res.send({message:"Registro exitoso",data:true})
      
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: String(error),data:null });
  }
};

exports.logIn = async(req, res) => {
  try{
    const {email,password} = req.body 
    if(!email || !password)
        return res.status(404).send({message:"Se debe enviar email y password",data:null})
        
    const user = await userModel.findOne({email}).populate("favorites");
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
    res.send({ message: error }).end();
  }
};

exports.getOne = async(req, res) => {
  try {
    const { id } = req.params;
    if(!id)
      return res.status(404).send({message:"Envia un id de parametro",data:null})
    const user = await userModel.findById(id).populate("favorites").populate("stars").populate("notifications");
    if (!user) res.send({ message: "Usuario no existe" }).end();
    return res.send({ data: user,message:"Usuario encontrado" });
  } catch (error) {
    console.log(error);
    res.send({ message: String(error) }).end();
  }
};

exports.deleteOne = async(req,res)=>{  // eliminar 
    try{
        const {id} = req.params
        await userModel.deleteOne({_id:id})
        return res.send({message:"Usuario borrado",data:true})
    }catch(error){
        console.log(error);
        res.send({ message: error });
    }
};

exports.update = async(req,res)=>{ //actualizar
    try{
        const {id} = req.params
        const body = req.body
        const user = await userModel.findOneAndUpdate({_id:id},body,{new:true})
        return res.send({data:user}).end();
    }catch(error){
        console.log(error);
        res.send({ message: error }).end();
    }
};

exports.addStar = async(req,res)=>{ //agrega estrella
  try{
      const {id} = req.params
      const body = req.body
      const user = await userModel.findOneAndUpdate({_id:id},body,{new:true})
      return res.send({data:user}).end();
  }catch(error){
      console.log(error);
      res.send({ message: error }).end();
  }
};
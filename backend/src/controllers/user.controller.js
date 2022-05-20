const userModel = require("./../models/user.model");
const {isValidObjectId} = require("mongoose")

exports.getAll = async(req, res) => {
  try {
    const users = await userModel.find().populate("favorites").populate("stars").populate("notifications");;
    return res.send({ data: users,message:"Usuarios encontrados" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error interno del servidor",data:null });
  }
};


exports.getOne = async(req, res) => {
  try {
    const { id } = req.params;
    if(!isValidObjectId(id))
      return res.status(400).send({message:"Envia un id valido de parametro",data:null})
    const user = await userModel.findById(id).populate({path:"favorites",populate:{
      path:"post",populate:{path:"user"}
    }}).populate("stars").populate({path:"notifications",populate:{path:"user"}})
    if (!user) 
      return  res.send({ message: "Usuario no existente",data:null }).end();
    res.send({ data: user,message:"Usuario encontrado" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error interno del servidor",data:null }).end();
  }
};

exports.deleteOne = async(req,res)=>{  // eliminar 
    try{
        const {id} = req.params
        if(!isValidObjectId(id))
          return res.status(400).send({message:"Envia un id valido de parametro",data:null})
        const user = await userModel.findById(id);
        if (!user) res.send({ message: "Usuario no existe",data:null }).end();
        await userModel.deleteOne({_id:id})
        return res.send({message:"Usuario borrado",data:true})
    }catch(error){
        console.log(error);
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
};

exports.update = async(req,res)=>{ //actualizar o baja logica
    try{
        const {id} = req.params
        if(!isValidObjectId(id))
          return res.status(400).send({message:"Envia un id valido de parametro",data:null})
        const body = req.body
        const user = await userModel.findOneAndUpdate({_id:id},body,{new:true})
        if(!user)
          return res.send({message: "Error interno del servidor",data:null })
          
          return res.send({message:"success",data:user})
        
    }catch(error){
        console.log(error);
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
};

exports.getUserById = async(req, res) => {
  try {
    const { id } = req.params;
    if(!isValidObjectId(id))
      return res.status(400).send({message:"Envia un id valido de parametro",data:null})
    const user = await userModel.findById(id).populate({path:"favorites",populate:{
      path:"post",populate:{path:"user"}
    }}).populate("stars").populate({path:"notifications",populate:{path:"user"}})
    if (!user) 
      return  res.send({ message: "Usuario no existente",data:null }).end();
    res.send({ data: user,message:"Usuario encontrado" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error interno del servidor",data:null }).end();
  }
};


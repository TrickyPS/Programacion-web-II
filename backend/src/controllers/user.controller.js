const userModel = require("./../models/user.model");

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
    const newUser = new userModel({userName,password,email})
    await newUser.coderPassword()
    const user = await newUser.save()
    return res.send({data:user});
  } catch (error) {
    console.log(error);
    res.send({ message: error });
  }
};

exports.logIn = async(req, res) => {
  try{
    const {email,password} = req.body 
    if(!email || !password)
        res.send({message:"Se debe enviar email y password"}).end()
        
    const user = await userModel.findOne({email}).populate("favorites");
    if(!user)
        return res.send({message:"No existe el usuario"})
    const matchPassword = await user.comparePassword(password);
    if(!matchPassword)
      return res.send({message:"El password es incorrecto"});
    
    return res.send({data:user})
  }catch(error){
    console.log(error);
    res.send({ message: error }).end();
  }
};

exports.getOne = async(req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id).populate("favorites");
    if (!user) res.send({ message: "Usuario no existe" }).end();
    return res.send({ data: user });
  } catch (error) {
    console.log(error);
    res.send({ message: error }).end();
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
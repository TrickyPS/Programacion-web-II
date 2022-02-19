const userModel = require("./../models/user.model")

exports.getAll = (req,res)=>{
    res.send("todos los usuarios")
}

exports.logUp = async(req,res)=>{
    const { body} = req
    const user = await userModel.create(body)
    console.log(user);
    res.send(user)
}

exports.logIn = (req,res)=>{
    res.send("Logear usuario")
}

exports.getOne = (req,res)=>{
    res.send("Obtener un usuario")
}
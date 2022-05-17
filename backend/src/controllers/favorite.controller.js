const favoriteModel = require("./../models/favorite.model");
const userModel = require("./../models/user.model");
const {isValidObjectId} = require("mongoose")

exports.addFavorite = async(req,res)=>{
    try {
        const { idPost  } = req.body;
        const idUser = req.user?.id
        if(!isValidObjectId(idPost) || !isValidObjectId(idUser)  ) 
            return res.send({message:"Los datos enviados son invalidos"})
        
        const newFavorite = new favoriteModel({post:idPost});
        const favorite = await newFavorite.save();
        await userModel.updateOne({_id:idUser},{$push:{favorites:favorite._id}})
        
        return res.send({message:"Post agregado", data:favorite});
      } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error interno del servidor",data:null });
      }
}


exports.deleteOne = async(req,res)=>{
    try {
        const {id} = req.params;
        if(!isValidObjectId(id))
            return res.status(400).send({message:"Provee un id valido",data:null})

        const user = req.user?.id
        await favoriteModel.deleteOne({_id:id});
        await userModel.updateOne({_id:user},{$unset:{favorites:id}})
        return res.send({message: "Favorito eliminado", data:true});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
}
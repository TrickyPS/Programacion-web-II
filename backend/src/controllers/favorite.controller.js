const favoriteModel = require("./../models/favorite.model");
const userModel = require("./../models/user.model");

exports.addFavorite = async(req,res)=>{
    try {
        const { idPost,idUser  } = req.body;
        if(!idPost || !idUser ) 
            return res.send({message:"Los datos enviados son invalidos"})
        
        const newFavorite = new favoriteModel({post:idPost});
        const favorite = await newFavorite.save();
        await userModel.updateOne({_id:idUser},{$push:{favorites:favorite._id}})
        
        return res.send({message:"Post agregado", data:favorite});
      } catch (error) {
        console.log(error);
        res.send({ message: error });
      }
}


exports.deleteOne = async(req,res)=>{
    try {
        const {id} = req.params;
        await favoriteModel.deleteOne({_id:id});
        return res.send({message: "Favorito eliminado", data:true});
    } catch (error) {
        console.log(error);
        res.send({message: error});
    }
}
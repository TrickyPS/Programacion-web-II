const commentModel = require("./../models/comments.model");
const postModel = require("./../models/posts.model");
const userModel = require("./../models/user.model");
const {isValidObjectId} = require("mongoose")

exports.newComment = async(req, res) => {
    try {
        const {comment,idPost} = req.body;
        const user = req.user?.id;
        if(!comment || !user || !idPost) 
            return res.status(400).send({message:"Los datos enviados no son validos",data:null});
        const newComment = new commentModel({comment,user});
        const comm = await newComment.save();
        await postModel.updateOne({_id:idPost},{$push:{comments:comm._id}})
        return res.send({data:comm});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
}


exports.getComment = async(req, res) =>{
    try {
        const {id} = req.params;
        if(!isValidObjectId(is))
            return res.status(400).send({message:"Provee un id valido",data:null})
        const comment = await commentModel.findById(id).populate({ 
            path: 'acomments',
            populate: {
              path: 'user',
              model: 'user'
            } 
         }).populate("user");
        if(!comment) return res.send({message: "El comentario no existe"}).end();
        return res.send({data:comment})
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
}

exports.deleteComment = async(req, res) => {
    try {
        const {id} = req.params;
        if(!isValidObjectId(is))
            return res.status(400).send({message:"Provee un id valido",data:null})
        await commentModel.deleteOne({_id:id});
        return res.send({message: "Comentario eliminado", data:true});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
}

exports.updateComment = async(req,res)=>{
    try {
        const {id} = req.params;
        if(!isValidObjectId(is))
            return res.status(400).send({message:"Provee un id valido",data:null})
        const {body} = req;
        const comment = await commentModel.findById(id);
        if(!comment) return res.send({message:"No se encontró el comentario"});
        const updatedcomment = await commentModel.findOneAndUpdate({_id:id},{$set:body},{new:true})
        return res.send({data:updatedcomment})
    } catch (error) {
        console.log({message:"Error interno del servidor"});
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
}

exports.addStar = async(req,res)=>{ //agrega estrella
    try{
        const {idUser,idComment} = req.body
        if(!isValidObjectId(idUser) || !isValidObjectId(idComment))
            return res.status(400).send({message:"Provee  un idUSer , idComment valido",data:null})
        await userModel.updateOne({_id:idUser},{$push:{stars:idComment}},{new:true})
        return res.send({data:true}).end();
    }catch(error){
        console.log(error);
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
  };


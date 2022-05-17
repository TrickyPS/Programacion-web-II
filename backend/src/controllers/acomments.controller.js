const acommentModel = require("./../models/acomments.model");
const commentModel = require("./../models/comments.model");
const {isValidObjectId} = require("mongoose")

exports.add = async(req, res) => {
    try {
        const {comment,idComment} = req.body;
        const user = req.user?.id
        if(!comment || !user || !idComment) 
        return res.send({message:"Los datos enviados no son validos",data:null});
        const newComment = new acommentModel({comment,user});
        const comm = await newComment.save();
        await commentModel.updateOne({_id:idComment},{$push:{acomments:comm._id}});
        
        return res.send({data:comm});
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
        await acommentModel.deleteOne({_id:id});
        return res.send({message: "Comentario eliminado", data:true});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
}

exports.update = async(req,res)=>{
    try {
        const {id} = req.params;
        if(!isValidObjectId(is))
        return res.status(400).send({message:"Provee un id valido",data:null})
        const {body} = req;
        const comment = await acommentModel.findById(id);
        if(!comment) return res.send({message:"No se encontró el comentario"});
        const updatedcomment = await acommentModel.findOneAndUpdate({_id:id},{$set:body},{new:true})
        return res.send({data:updatedcomment})
    } catch (error) {
        console.log({message:"Error interno del servidor"});
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
}

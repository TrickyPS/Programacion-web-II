const acommentModel = require("./../models/acomments.model");
const commentModel = require("./../models/comments.model");

exports.add = async(req, res) => {
    try {
        const {comment,user,idComment} = req.body;
        if(!comment || !user || !idComment) return res.send({message:"Los datos enviados no son validos"});
        const newComment = new acommentModel({comment,user});
        const comm = await newComment.save();
         await commentModel.updateOne({_id:idComment},{$push:{acomments:comm._id}});
        
        return res.send({data:comm});
    } catch (error) {
        console.log(error);
        res.send({message: error});
    }
}



exports.deleteComment = async(req, res) => {
    try {
        const {id} = req.params;
        await acommentModel.deleteOne({_id:id});
        return res.send({message: "Comentario eliminado", data:true});
    } catch (error) {
        console.log(error);
        res.send({message: error});
    }
}

exports.update = async(req,res)=>{
    try {
        const {id} = req.params;
        const {body} = req;
        const comment = await acommentModel.findById(id);
        if(!comment) return res.send({message:"No se encontró el comentario"});
        const updatedcomment = await acommentModel.findOneAndUpdate({_id:id},{$set:body},{new:true})
        return res.send({data:updatedcomment})
    } catch (error) {
        console.log({message:error});
        res.send({ message: error });
    }
}

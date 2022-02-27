const commentModel = require("./../models/comments.model");
const postModel = require("./../models/posts.model");
const userModel = require("./../models/user.model");

exports.newComment = async(req, res) => {
    try {
        const {comment,user,idPost} = req.body;
        if(!comment || !user || !idPost) return res.send({message:"Los datos enviados no son validos"});
        const newComment = new commentModel({comment,user});
        const comm = await newComment.save();
        await postModel.updateOne({_id:idPost},{$push:{comments:comm._id}})
        return res.send({data:comm});
    } catch (error) {
        console.log(error);
        res.send({message: error});
    }
}


exports.getComment = async(req, res) =>{
    try {
        const {id} = req.params;
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
        res.send({message: error});
    }
}

exports.deleteComment = async(req, res) => {
    try {
        const {id} = req.params;
        await commentModel.deleteOne({_id:id});
        return res.send({message: "Comentario eliminado", data:true});
    } catch (error) {
        console.log(error);
        res.send({message: error});
    }
}

exports.updateComment = async(req,res)=>{
    try {
        const {id} = req.params;
        const {body} = req;
        const comment = await commentModel.findById(id);
        if(!comment) return res.send({message:"No se encontró el comentario"});
        const updatedcomment = await commentModel.findOneAndUpdate({_id:id},{$set:body},{new:true})
        return res.send({data:updatedcomment})
    } catch (error) {
        console.log({message:error});
        res.send({ message: error });
    }
}

exports.addStar = async(req,res)=>{ //agrega estrella
    try{
        const {idUser,idComment} = req.body
        await userModel.updateOne({_id:idUser},{$push:{stars:idComment}},{new:true})
        return res.send({data:true}).end();
    }catch(error){
        console.log(error);
        res.send({ message: error }).end();
    }
  };


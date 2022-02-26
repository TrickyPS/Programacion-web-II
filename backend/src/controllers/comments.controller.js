const commentModel = require("./../models/comments.model");

exports.newComment = async(req, res) => {
    try {
        const {body} = req;
        const newComment = new commentModel(body);
        const comment = await newComment.save();
        res.send({data:comment});
    } catch (error) {
        console.log(error);
        res.send({message: error});
    }
}

exports.getComment = async(req, res) =>{
    try {
        const {id} = req.params;
        const comment = await commentModel.findById(id);
        if(!comment) res.send({message: "El comentario no existe"}).end();
    } catch (error) {
        console.log(error);
        res.send({message: error});
    }
}

exports.deleteComment = async(req, res) => {
    try {
        const {id} = req.params;
        await commentModel.deleteOne({_id:id});
        res.send({message: "Comentario eliminado", data:true});
    } catch (error) {
        console.log(error);
        res.send({message: error});
    }
}


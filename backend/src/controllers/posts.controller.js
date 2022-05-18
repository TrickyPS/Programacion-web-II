const postModel = require("./../models/posts.model");
const imagesModel = require("./../models/images.model");
const {isValidObjectId} = require("mongoose")

exports.addPost = async(req,res)=>{
    try {
        const { title,category,description,images  } = req.body;
        const user = req.user.id;
        if(!title || !category || !description  ) 
            return res.send({message:"Los datos enviados son invalidos"})
        
        const newPost = new postModel({user,title,category,description})
        const post = await newPost.save()
        for(let url of images ){
            const {_id} = await imagesModel.create({url});
            
            await postModel.updateOne({_id:post._id},{$push:{images:_id}})
        }
        return res.send({message:"Post creado", data:true});
      } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error interno del servidor",data:null });
      }
}


exports.getOne = async(req,res)=>{
    try {
        const {id} = req.params
        if(!isValidObjectId(id))
            return res.status(400).send({message:"Provee un id valido",data:null})
        const post = await postModel.findById(id)
        .populate("images")
        .populate("category")
        .populate({ 
            path: 'comments',
            populate: {
              path: 'acomments',
              model: 'acomments',
              populate:{
                path: 'user',
                model: 'user',
              }
            } 
         })
        .populate("reactions")
        if(!post) return res.send({message:"No se encontró el post",data:null})
        return res.send({data:post})
    } catch (error) {
        console.log({message:"Error interno del servidor"});
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
}

exports.getAll = async(req,res)=>{
    try {
        const posts = await postModel.find()
        .populate("images")
        .populate("category")
        .populate({ 
            path: 'comments',
            populate: [
                {
                    path: 'acomments',
                    model: 'acomments',
                    populate:{
                      path: 'user',
                      model: 'user',
                    }
                  },
                  {
                      path:"user",
                      model:"user"
                  } 
            ]
         })
        .populate("reactions")
        .populate("user")
        if(!posts) return res.send({message:"No se encontraron el posts"})
        return res.send({data:posts.filter(item=> item.status == true)})
    } catch (error) {
        console.log({message:"Error interno del servidor"});
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
}

exports.updatePost = async(req,res)=>{
    try {
        const {id} = req.params;
        if(!isValidObjectId(id))
            return res.status(400).send({message:"Provee un id valido",data:null})
        const {body} = req;
        const post = await postModel.findById(id);
        if(!post) return res.send({message:"No se encontró el post"})
        const updatedPost = await postModel.findOneAndUpdate({_id:id},{$set:body},{new:true})
        return res.send({data:updatedPost})
    } catch (error) {
        console.log({message:"Error interno del servidor"});
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
}

//TODO: Borrar referencias
exports.deletePost = async(req,res)=>{
    try {
        const {id} = req.params;
        if(!isValidObjectId(id))
            return res.status(400).send({message:"Provee un id valido",data:null})
        const post = await postModel.findById(id);
        if(!post) return res.send({message:"No se encontró el post"});
        const deletePost = await postModel.remove({_id:id});
        return res.send({data:deletePost})
    } catch (error) {
        console.log({message:"Error interno del servidor"});
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
}
const postModel = require("./../models/posts.model");
const userModel = require("../models/user.model");
const  categoryModel = require("./../models/category.model")

exports.bestReactions=async(req,res)=>{
    try {
        const posts = await postModel.find()
        .populate("images")
        .populate("category")
        .populate("reactions")
        .populate("user").sort({reactions:-1}).limit(5).exec()
        if(!posts) return res.send({message:"No se encontraron los posts"})
        return res.send({data:posts.filter(item=> item.status == true)})
    } catch (error) {
        console.log({message:"Error interno del servidor"});
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
}

exports.posts=async(req,res)=>{
    try {
        var users = await userModel.find();
        var respData = []
        for(let i = 0; i< users.length ; i++){
            const posts = await postModel.find({user:users[i]._id})
            respData.push({user:users[i],posts:posts.length})
        }
        return res.send({data:respData.sort((a,b)=>b.posts-a.posts).slice(0,5)})
    } catch (error) {
        console.log({message:error});
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
}

exports.rank=async(req,res)=>{
    try {
        const users = await userModel.find().populate("stars").sort({stars :-1}).limit(5).exec();
        return res.send({data:users})
    } catch (error) {
        console.log({message:error});
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
}

exports.topic=async(req,res)=>{
    try {
        const categories = await categoryModel.find();
        const respData = []
        for(let i = 0; i< categories.length ; i++){
            const posts = await postModel.find({category:categories[i]._id})
            respData.push({category:categories[i],posts:posts.length})
        }
        return res.send({data:respData.sort((a,b)=>b.posts-a.posts).slice(0,5)})
    } catch (error) {
        console.log({message:error});
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
}
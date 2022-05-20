const newsModel = require("./../models/news.model");
const imagesModel = require("./../models/images.model")
const {isValidObjectId} = require("mongoose")

exports.addNews = async(req, res) => {
    try {
        const {title,description,category,images,descriptionCorta} = req.body;

        if(!title|| !description || !descriptionCorta || !isValidObjectId(category) ){
            return res.status(400).send({message:"Provee datos validos",data:null})
        }
        var arrayImagesId = [];
        for(let url of images ){
            const {_id} = await imagesModel.create({url});
            arrayImagesId.push(_id)
        }

        const newNews = new newsModel({title,description,category,descriptionCorta,images:arrayImagesId});
        const news = await newNews.save();
        res.send({data: news});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
};

exports.getNews = async(req, res) => {
    try {
        const {id} = req.params;
        const news = await newsModel.findById(id).populate("images").populate("category");
        if(!news) 
        return res.send({message: "Noticia inexistente",data:null}).end();
        res.send({data: news});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
};

exports.getAllNews = async(req, res) => {
    try {
        const news = await newsModel.find().populate("images").populate("category");
        res.send({data: news});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
};

exports.updateNews = async(req, res) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const news = await newsModel.findOneAndUpdate({_id:id}, body, {new:true});
        res.send({data:news}).end();
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
};

exports.deleteNews = async(req, res) => {
    try {
        const {id} = req.params;
        await newsModel.deleteOne({_id:id});
        res.send({message: "Noticia eliminada", data:true});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error interno del servidor",data:null });
    }
};
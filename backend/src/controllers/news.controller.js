const newsModel = require("./../models/news.model");

exports.addNews = async(req, res) => {
    try {
        const {body} = req;
        const newNews = new newsModel(body);
        const news = await newNews.save();
        res.send({data: news});
    } catch (error) {
        console.log(error);
        res.send({message: error});
    }
};

exports.getNews = async(req, res) => {
    try {
        const {id} = req.params;
        const news = await newsModel.findById(id);
        if(!news) res.send({message: "Noticia inexistente"}).end();
        res.send({data: news});
    } catch (error) {
        console.log(error);
        res.send({message: error});
    }
};

exports.getAllNews = async(req, res) => {
    try {
        const news = await newsModel.find();
        res.send({data: news});
    } catch (error) {
        console.log(error);
        res.send({message: error});
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
        res.send({message: error});
    }
};

exports.deleteNews = async(req, res) => {
    try {
        const {id} = req.params;
        await newsModel.deleteOne({_id:id});
        res.send({message: "Noticia eliminada", data:true});
    } catch (error) {
        console.log(error);
        res.send({message: error});
    }
};
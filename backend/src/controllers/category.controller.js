const categoryModel = require("./../models/category.model");
const {isValidObjectId} = require("mongoose")

exports.addCategory = async(req, res) => {
    try{
        const { name } = req.body;
        if(!name)
            return res.status(400).send({message:"Provee un name",data:null})
        const existCategory = await categoryModel.findOne({name:name})
        if(existCategory)
            return res.send({message:"La categoria ya existe",data:null})
        
        const newCategory = new categoryModel({name});
        const category = await newCategory.save();
        res.send({data:category,message:"Categoria agregada"});
    } catch (error){
        console.log(error);
        res.status(500).send({message: "Error interno del servidor",data:null});
    }
}

exports.getAll = async(req, res) => {
    try{
        const categories = await categoryModel.find();
        res.send({data: categories});
    } catch(error){
        console.log(error);
        res.status(500).send({message: "Error interno del servidor",data:null});
    }
}

exports.getOne = async(req, res) => {
    try {
        const {id} = req.params;
        if(!isValidObjectId(id))
            return res.status(400).send({message:"Envia un id valido",data:null})
        const category = await categoryModel.findById(id);
        if(!category) 
            return res.send({message: "No existe categoría",data:null});
        res.send({data: category});
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Error interno del servidor",data:null});
    }
}

exports.deleteOne = async(req, res) => {
    try {
        const {id} = req.params;
        if(!isValidObjectId(id))
            return res.status(400).send({message:"Envia un id valido",data:null})
        await categoryModel.deleteOne({_id:id});
        res.send({message: "Categoría eliminada.", data:true});
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Error interno del servidor",data:null});
    }
}

exports.update = async(req, res) => {
    try {
        const {id} = req.params;
        if(!isValidObjectId(id))
            return res.status(400).send({message:"Envia un id valido",data:null})
        const body = req.body;
        const category = await categoryModel.findOneAndUpdate({_id:id}, body, {new: true});
        res.send({data:category}).end();
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Error interno del servidor",data:null}).end();
    }
}
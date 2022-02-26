const categoryModel = require("./../models/category.model");

exports.addCategory = async(req, res) => {
    try{
        const { body } = req;
        const newCategory = new categoryModel(body);
        const category = await newCategory.save();
        res.send({data:category});
    } catch (error){
        console.log(error);
        res.send({message: error});
    }
}

exports.getAll = async(req, res) => {
    try{
        const categories = await categoryModel.find();
        res.send({data: categories});
    } catch(error){
        console.log(error);
        res.send({message: error});
    }
}

exports.getOne = async(req, res) => {
    try {
        const {id} = req.params;
        const category = await categoryModel.findById(id);
        if(!category) res.send({message: "No existe categoría"}).end();
        res.send({data: category});
    } catch (error) {
        console.log(error);
        res.send({message: error});
    }
}

exports.deleteOne = async(req, res) => {
    try {
        const {id} = req.params;
        await categoryModel.deleteOne({_id:id});
        res.send({message: "Categoría eliminada.", data:true});
    } catch (error) {
        console.log(error);
        res.send({message: error});
    }
}

exports.update = async(req, res) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const category = await categoryModel.findOneAndUpdate({_id:id}, body, {new: true});
        res.send({data:user}).end();
    } catch (error) {
        console.log(error);
        res.send({message: error}).end();
    }
}
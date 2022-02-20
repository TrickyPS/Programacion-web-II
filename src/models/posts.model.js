const { Schema, model,Types } = require("mongoose");
const posts = new Schema({
user: {
  type: Types.ObjectId,
ref:"user"
},
title: {
    type: String,
},
category:{
    type:Types.ObjectId,
    ref:"category",
},
description:{
    type:String,
}
,
comments:[{
    type: Types.ObjectId,
    ref:"comments",
}],
reactions:[{
    type: Types.ObjectId,
    ref:"reactions",

}]
}, {
    versionKey: false,
    timestamps: true,
  });
//usuario
//categoria
//descripcion
//imagenes
//reacciones
//comentarios
//favorito
module.exports = model("posts", posts);


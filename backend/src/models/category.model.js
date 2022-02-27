const { Schema, model } = require("mongoose");
const category = new Schema({
  name: 
    {
      type: String, unique:true
    },
    status:{
      type:Boolean,
      default:true
  }
  
}
,{
    versionKey: false,
    timestamps: true,
  });
module.exports = model("category", category);
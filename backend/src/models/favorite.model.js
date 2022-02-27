const { Schema, model,Types } = require("mongoose");
const favorite = new Schema({
  post: 
    {
      type: Types.ObjectId,
      ref:"posts"
    },
  
}
,{
    versionKey: false,
    timestamps: true,
  });
module.exports = model("favorite", favorite);
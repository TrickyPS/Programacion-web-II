const { Schema, model,Types } = require("mongoose");
const news = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: Types.ObjectId,
    ref:"category"
  },
  status:{
    type:Boolean,
    default:true
},
  images:[{
type: Types.ObjectId,
ref :"images"
  }],
}
,{
    versionKey: false,
    timestamps: true,
  });
module.exports = model("news", news);

const { Schema, model,Types } = require("mongoose");
const news = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
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

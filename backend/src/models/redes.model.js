const { Schema, model,Types } = require("mongoose");
const redes = new Schema({
  red: {
    type:String
  },
  link:{
    type:String
  }
}
,{
    versionKey: false,
    timestamps: true,
  });
module.exports = model("redes", redes);
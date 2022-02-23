const { Schema, model } = require("mongoose");
const category = new Schema({
  name: [
    {
      type: String, unique:true
    },
  ],
}
,{
    versionKey: false,
    timestamps: true,
  });
module.exports = model("category", category);
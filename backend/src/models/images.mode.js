const { Schema, model } = require("mongoose");
const images = new Schema({
  link: [
    {
      type: String,
    },
  ],
}
,{
    versionKey: false,
    timestamps: true,
  });
module.exports = model("images", images);

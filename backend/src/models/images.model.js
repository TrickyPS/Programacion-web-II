const { Schema, model } = require("mongoose");
const images = new Schema({
  url: [
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

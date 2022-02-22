const { Schema, model,Types} = require("mongoose");
const comments = new Schema({
  comment: 
    {
      type: String,
    },
  acomments: [{
 type: Types.ObjectId,
 ref:"acomments"
  }],
  user: {
      type: Types.ObjectId,
      ref:"user"
  }
}
,{
    versionKey: false,
    timestamps: true,
  });
module.exports = model("comments", comments);
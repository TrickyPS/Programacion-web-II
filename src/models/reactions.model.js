const { Schema, model,Types } = require("mongoose");
const reactions = new Schema({
  like: 
    {
      type: Boolean,
    },
   user:{
       type:Types.ObjectId,  ref:"user"
   }
}
,{
    versionKey: false,
    timestamps: true,
  });
module.exports = model("reactions", reactions);
const {
    Schema,Types,
    model
} = require("mongoose");
const acomments = new Schema({
    comment: {
        type: String,
    },
    status:{
        type:Boolean,
        default:true
    },
  user: {
      type: Types.ObjectId,
      ref:"user"
  }
}, {
    versionKey: false,
    timestamps: true,
});
module.exports = model("acomments", acomments);
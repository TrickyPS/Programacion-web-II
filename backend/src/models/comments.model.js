const { Schema, model, Types } = require("mongoose");
const comments = new Schema(
  {
    comment: {
      type: String,
    },
    acomments: [
      {
        type: Types.ObjectId,
        ref: "acomments",
      },
    ],
    star:{
      type:Boolean,
      default:false
    },
    user: {
      type: Types.ObjectId,
      ref: "user",
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = model("comments", comments);

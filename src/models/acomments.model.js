const {
    Schema,Types,
    model
} = require("mongoose");
const acomments = new Schema({
    text: {
        type: String,
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
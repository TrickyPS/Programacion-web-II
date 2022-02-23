const { Schema, model,Types} = require("mongoose");

const coder = require("bcryptjs");
const user = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      required: true,
      unique: true,
      type: String,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Provide a valid email",
      ],
    },
    image: {
      type: String,
      required: false,
    },
    usertype: {
      type: Number,
      required: true,
      default:0
    },
    notifications: [{
        type: Types.ObjectId,
        ref:"notifications"
    }],
    favorites:[{
        type:Types.ObjectId,
        ref:"posts"
    }],
    redes:[{
      type:Types.ObjectId,
      ref:"redes"
    }]
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
user.methods.coderPassword = async function  (){
    this.password =  await coder.hash(this.password,10);
}
user.methods.comparePassword = async function (password){
return await coder.compare(password,this.password);
}
module.exports = model("user", user);

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
      type: Int16Array,
      required: true,
    },
    notifications: [{
        type: Types.ObjectId,
        ref:"notifications"
    }],
    favorites:[{
        type:Types.ObjectId,
        ref:"favorite"
    }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
user.methods.coderPassword = async function  (){
    this.password =  await coder.hash(this.password,10);
}
user.methods.comparepass = async function (password){
return await coder.compare(password,this.password);
}
module.exports = model("user", user);

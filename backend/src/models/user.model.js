const { Schema, model,Types} = require("mongoose");

const coder = require("bcryptjs");
const user = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName:{
      type:String
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
    status:{
      type:Boolean,
      default:true
  },
    image: {
      type: String,
      required: false,
    },
    userType: {
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
        ref:"favorite"
    }],
    stars:[{
      type:Types.ObjectId,
      ref:"comments"
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

const { Schema,model} = require("mongoose")

const User = new Schema({
    username:{
        type:String,
        required:true,
}
},{
    versionKey:false,
    timestamps:true
})

module.exports = model("User",User)
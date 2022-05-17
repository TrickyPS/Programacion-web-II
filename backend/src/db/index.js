const {connect} = require("mongoose");
require("dotenv").config();

const Connection = async()=>{
    try {
        await connect(process.env.DB_URI || "mongodb://localhost:27017/geekup2")
        console.log("DB connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {Connection}

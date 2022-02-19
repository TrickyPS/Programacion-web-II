const {connect} = require("mongoose")

const Connection = async()=>{
    try {
        await connect("mongodb://localhost:27017/geekup")
        console.log("DB connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {Connection}
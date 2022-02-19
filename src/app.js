const express = require("express")
const app = express();
const {userRoutes,noticiasRoutes} = require("./routes")

const cors = require("cors")

//variables

app.set("port",5000)


//middllewares
app.use(express.json())
app.use(cors())


//routes
app.use("/api/user",userRoutes);
app.use("/api/noticias",noticiasRoutes)


module.exports = app;
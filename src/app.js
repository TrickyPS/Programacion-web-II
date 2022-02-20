const express = require("express")
const app = express();
const {userRoutes,noticiasRoutes,postsRoutes} = require("./routes")

const cors = require("cors")

//variables

app.set("port",5000)


//middllewares
app.use(express.json())
app.use(cors())


//routes
app.use("/api/user",userRoutes);
app.use("/api/noticias",noticiasRoutes)
app.use("/api/posts",postsRoutes)



module.exports = app;
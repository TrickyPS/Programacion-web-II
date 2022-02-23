
const app = require("./src/app")
require("./src/db").Connection()

app.listen(app.get("port"),()=>
    console.log("Listening on port " + app.get("port"))
)
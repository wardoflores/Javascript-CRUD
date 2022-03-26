require("./db")
const express = require("express")
const bodyparser = require("body-parser")

var postmessagesroutes = require("./controllers/postmessagecontroller")

var app = express()
app.use(bodyparser.json())
app.listen(4000,()=>console.log("Server started at : 4000"))

app.use("/postmessage",postmessagesroutes)

require("./db")
const express = require("express")
const bodyparser = require("body-parser")

var postmessagesroutes = require("./controllers/postmessagecontroller") // Refers to module that routes the postmessage model 

var app = express()
app.use(bodyparser.json())

app.listen(4000,()=>console.log("Server started at : 4000")) // Port 4000 of localhost

app.use("/postmessage",postmessagesroutes) // initiate postmessage.js module

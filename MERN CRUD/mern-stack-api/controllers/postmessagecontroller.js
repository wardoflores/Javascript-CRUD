const express = require("express")
var router = express.Router()

var { postmessage } = require("../models/postmessage")

router.get('/',(req,res)=>{
    postmessage.find((err,docs)=>{
        if(!err) res.send(docs)
        else console.log("Error while retrieving all records : "+JSON.stringify(err,undefined,2))
    })
})

module.exports = router
const express = require("express")
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectID



var { postmessage } = require("../models/postmessage")

router.get('/',(req,res)=>{ // model constructor that routes to gGETet document referred by postmessage.
    postmessage.find((err,docs)=>{
        if(!err) res.send(docs)
        else console.log("Error while retrieving all records : "+JSON.stringify(err,undefined,2))
    })
})

router.post('/',(req,res)=>{ // model constructor that routes to POST document referred by postmessage.
    var newrecord = new postmessage ({
        title: req.body.title,
        message: req.body.message
    })

    newrecord.save((err,docs)=>{
        if(!err) res.send(docs)
        else console.log("Error while creating new records : "+JSON.stringify(err,undefined,2))
    })

})

router.put('/:id',(req,res)=>{ // model constructor that routes to PUT document referred by postmessage.
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send("No record with given id : " + req.params.id)

    var updatedrecord = {
        title: req.body.title,
        message: req.body.message
    }

    postmessage.findByIdAndUpdate(req.params.id,{$set:updatedrecord},(err,docs)=>{
        if(!err) res.send(docs)
        else console.log("Error while updating a records : "+JSON.stringify(err,undefined,2))
    })
})

router.delete('/:id',(req,res)=>{ // model constructor that routes to DELETE document referred by postmessage.
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send("No record with given id : " + req.params.id)


    postmessage.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err) res.send(docs)
        else console.log("Error while deleting a records : "+JSON.stringify(err,undefined,2))
    })
})


module.exports = router
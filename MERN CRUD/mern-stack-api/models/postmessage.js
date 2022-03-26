const mongoose = require("mongoose")

var postmessage = mongoose.model("postmessage", // defining the data structure of postmessage.
{
    title : {type:String},
    message : {type:String},
})

module.exports = {postmessage}
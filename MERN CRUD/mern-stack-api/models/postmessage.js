const mongoose = require("mongoose")

var postmessage = mongoose.model("postmessage",
{
    title : {type:String},
    message : {type:String},
})

module.exports = {postmessage}
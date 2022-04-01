// Models the Object `Postmessage` structure

const mongoose = require("mongoose")

// defining the data structure of postmessage.
var postmessage = mongoose.model("postmessages", // First Parameter is MongoDB collection name.
{
    title : {type:String},
    message : {type:String},
}, 'Postmessages') // Added names to specify other names for the collection on MongoDB/first parameter.

module.exports = {postmessage}
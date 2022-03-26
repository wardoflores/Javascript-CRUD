const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/postManagerDB', // Index created on MongoDB.
err => {
    if(!err)
        console.log("MongoDB succeeded.")
    else
        console.log("Error while connecting to MongoDB : " + JSON.stringify(err, undefined, 2))
})

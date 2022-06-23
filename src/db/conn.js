const mongoose = require("mongoose");

mongoose.connect("mongodb://3.110.204.227/cricketapp").then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.log("connection failed");
});
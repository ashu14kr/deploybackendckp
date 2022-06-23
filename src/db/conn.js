const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cricketapp").then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.log("connection failed");
});
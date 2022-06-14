const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://cricketapp:cricketapp123@cluster0.ifxhlvo.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.log("connection failed");
});
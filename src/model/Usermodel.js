const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    _id:{},
    username:{},
    mobileno:{},
    emailid:{},
    password:{},
    rdate:{}

})

module.exports = mongoose.model("users", UserSchema);
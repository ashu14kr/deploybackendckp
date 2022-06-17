const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    _id:{},
    username:{},
    mobileno:{},
    emailid:{
        unique: true
    },
    password:{},

})

module.exports = mongoose.model("users", UserSchema);
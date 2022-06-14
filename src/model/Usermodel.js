const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    username:{},
    mobileno:{},
    emailid:{},
    password:{},

})

module.exports = mongoose.model("users", UserSchema);
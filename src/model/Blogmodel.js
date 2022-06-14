const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({

    image: {
        type: String,
    },

    title:{
        type: String,
    },

    paragraph:{
        type: String,
    },
    date:{
        type: String,
    }
})

module.exports = mongoose.model("blogs", BlogSchema);
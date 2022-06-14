const mongoose = require("mongoose");


const videoSchema = new mongoose.Schema({

    videourl:{},
    title:{},
    date:{},
})


module.exports = mongoose.model("videos", videoSchema)
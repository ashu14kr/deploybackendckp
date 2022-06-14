const mongoose = require("mongoose");

const OffersSchema = new mongoose.Schema({

    image: {
        type: String,
    },

    Offertitle:{
        type: String,
    },

    offer:{
        type: String,
    },

    offerLink: {
        type: String,
    },
    date:{}

})

module.exports = mongoose.model("offers", OffersSchema);
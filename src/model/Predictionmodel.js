const mongoose = require("mongoose");

const PredictionSchema = new mongoose.Schema({

    matchname:{},
    whetherreport:{},
    pitchreport:{},
    analysis:{},
    keyplayers:{},
    peoplepicks:{},
    probable11:{},
    grandleagueimg:{},
    headtoheadteamimg:{},
    thumbnailimg:{},
    date:{}

})

module.exports = mongoose.model("predictions", PredictionSchema);
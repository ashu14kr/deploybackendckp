const mongoose = require("mongoose");

const PredictionSchema = new mongoose.Schema({

    matchname:{},
    whetherreport:{},
    pitchreport:{},
    analysis:{},
    keyplayers:{},
    peoplepicks:{},
    probable11:{},
    grandleague:{},
    headtoheadteam:{},
    date:{}

})

module.exports = mongoose.model("predictions", PredictionSchema);
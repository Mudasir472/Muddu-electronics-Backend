const mongoose = require("mongoose");
const { Schema } = mongoose;

const teamSchema = new Schema({
    name:String,
    imgLink:String,
    speciality:String,
    desc:String,
})

const Team = mongoose.model("Team",teamSchema)

module.exports = Team;
const mongoose = require("mongoose");

const magicM = new mongoose.Schema({
    email :{type : String},
    otp :{type : Number},
})

const magicModel = mongoose.model("magic_master",magicM);

module.exports = magicModel;
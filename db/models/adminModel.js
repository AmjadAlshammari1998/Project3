const { text } = require("express");
const mongoose = require("mongoose");

const adminModel = new mongoose.Schema({
userName:{type:String , unique: true, required: true},
passowrd:{type:String , required: true},


})

module.exports = mongoose.model("adminModel", adminModel);
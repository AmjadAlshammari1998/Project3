const mongoose = require("mongoose");

const jobModel = new mongoose.Schema({
    nameJob: { type:String},
    descriptionJob:{type:String},
    salary:{type:String},
    img: { type: String},
    userId:{type: mongoose.Schema.Types.ObjectId, ref: "userModel"}
  });
  
  module.exports = mongoose.model("jobModel",jobModel );
const mongoose = require("mongoose");

const jobModel = new mongoose.Schema({
    nameJob: { type:String},
    descriptionJob:{type:String},
    salary:{type:String},
  });
  
  module.exports = mongoose.model("jobModel",jobModel );
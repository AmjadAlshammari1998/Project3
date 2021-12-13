const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  account: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  imageProfile:{type: String},
  password: { type: String, required: true },

});

module.exports = mongoose.model("userModel", userModel);
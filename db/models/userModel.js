const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  account: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  imageProfile:{type: String},
  description:{type: String},
  password: { type: String, required: true },
  favorite: [{type: mongoose.Schema.Types.ObjectId, ref: "postModel"}],
  admin:{type:Boolean}
});

module.exports = mongoose.model("userModel", userModel);
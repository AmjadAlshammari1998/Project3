const mongoose = require("mongoose");

const postModel = new mongoose.Schema({
  text: { type: String, required:true},
  img: { type: String},
  userId:{type: mongoose.Schema.Types.ObjectId, ref: "userModel"}
});

module.exports = mongoose.model("postModel",postModel );

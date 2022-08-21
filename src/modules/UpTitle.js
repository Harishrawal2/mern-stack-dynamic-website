const mongoose = require("mongoose");

const UpTitle = mongoose.Schema({
  titleUp: String,
  subTUp: String,
  linkTextUp: String,
  linkUp: String,
});

module.exports = mongoose.model("UpTitle", UpTitle);

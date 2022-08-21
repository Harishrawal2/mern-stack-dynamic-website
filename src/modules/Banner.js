const mongoose = require("mongoose");

const Banner = mongoose.Schema({
  titleRight: String,
  subTRight: String,
  linkRight: String,
  imgRight: String,
  titleLeft: String,
  subTLeft: String,
  linkLeft: String,
  imgLeft: String,
});

module.exports = mongoose.model("Banner", Banner);

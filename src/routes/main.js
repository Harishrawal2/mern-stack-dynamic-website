const express = require("express");

const Detail = require("../modules/details");
const Service = require("../modules/Service");
const Sliders = require("../modules/slider");
const Banner = require("../modules/Banner");
const UpTitle = require("../modules/UpTitle");
const Contact = require("../modules/Contact");

const routes = express.Router();

routes.get("/", async (req, res) => {
  const Details = await Detail.findOne({ _id: "62e2f616c1bdb2b6dd22025f" });
  const Slides = await Sliders.find();
  const services = await Service.find();
  const Banners = await Banner.find();
  const UpTitles = await UpTitle.find();
  // console.log(UpTitles);
  // console.log(Banner);
  // console.log(sliders);
  // console.log(Details);
  res.render("index", {
    Details: Details,
    Slides: Slides,
    services: services,
    Banners: Banners,
    UpTitles: UpTitles,
  });
});

routes.get("/gellary", async (req, res) => {
  const Details = await Detail.findOne({ _id: "62e2f616c1bdb2b6dd22025f" });
  // console.log(Details);
  res.render("gellary", {
    Details: Details,
  });
});

routes.post("/process-contact-form", async (req, res) => {
  console.log("This Form is Submitted");
  // console.log(req.body);
  // save the form data in database
  try {
    const data = await Contact.create(req.body);
    console.log(data);
    res.redirect("/");
  } catch (e) {
    console.log(e);
    res.redirect("/");
  }
});

module.exports = routes;

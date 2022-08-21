const express = require("express");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Detail = require("./modules/details");
const routes = require("./routes/main");
const Sliders = require("./modules/slider");
const Service = require("./modules/Service");
const Banner = require("./modules/Banner");
const UpTitle = require("./modules/UpTitle");

// db connections
mongoose.connect("mongodb://localhost/web_harish", () => {
  console.log("db Connected");

  // This is UpperBanner Connetcted in database
  // UpTitle.create({
  //   titleUp: "Start Learning new Technology here !!",
  //   subTUp:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, aliquid voluptates at illo nesciunt,asperiores quibusdam laborum animi unde repellendus, alias vero! Voluptatem eius impedit inventore culpa vel fugit tenetur.",
  //   linkTextUp: "Start Learning",
  //   linkUp: "https://zoom.us/signin",
  // });

  //  This is Banner Connected in DataBase
  // Banner.create({
  //   titleRight: "We work for prople, just growing your skills not Money",
  //   subTRight:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, hic. Quam modi minus, explicabo est nulla voluptatibus distinctio, inventore nemo at numquam amet porro. Porro et debitis aspernatur magnam deleniti.",
  //   linkRight: "Click here",
  //   imgRight: "/static/images/graphic.png",
  //   titleLeft:
  //     "We work for prople, Before Learn after Earn, Just Focus on the Skills",
  //   subTLeft:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, hic. Quam modi minus, explicabo est nulla voluptatibus distinctio, inventore nemo at numquam amet porro. Porro et debitis aspernatur magnam deleniti.",
  //   linkLeft: "Click here",
  //   imgLeft: "/static/images/graphic2.png",
  // });

  // Services Created in DataBase
  // Service.create([
  //   {
  //     icon: "fab fa-accusoft",
  //     title: "Provide best Courses",
  //     description:
  //       "Are you confues for learn a best courses. We are provide best help to student course and with Placemnt.",
  //     linkText: "https://getbootstrap.com/",
  //     link: "Check",
  //   },
  //   {
  //     icon: "fab fa-affiliatetheme",
  //     title: "Learn Full Stack & DSA",
  //     description:
  //       "Are you learn FullStack best courses. We are provide best help to student course and with DSA.",
  //     linkText: "https://getbootstrap.com/",
  //     link: "Check",
  //   },
  //   {
  //     icon: "fab-solid fa-display-code",
  //     title: "Software Developer",
  //     description:
  //       "Are you learn a Software courses. We are provide best help to student course and with Placement.",
  //     linkText: "https://getbootstrap.com/",
  //     link: "Check",
  //   },
  // ]);

  // Sliders Created in DataBase

  // Sliders.create([
  //   {
  //     title: "Learn JavaScript Programming Language.",
  //     subTitle:
  //       "JavaScript is a Programming and Scripting Language Use for Web development It is Use for Mean Stack Developer and Mearn Stack developer, frontend and backend, Game development, Application Developent use framework is ReactJS, Angular, React-Native and NextJs, VieJS All About etc.",
  //     imageUrl: "/static/images/slider.png",
  //     class: "active",
  //   },
  //   {
  //     title: "Learn Python Programming Language.",
  //     subTitle:
  //       "Python is a most of the use Data Science and Web development Programming Language Use for Web development It is Use for Full Stack developer, frontend and backend, Game development, Application Developent use framework is Django All About etc.",
  //     imageUrl: "/static/images/slider1.png",
  //   },
  //   {
  //     title: "Learn Java Programming Language.",
  //     subTitle:
  //       "Java is a Oops Concept and Software Engineer most Popular Programming Language Use for Web development It is Use for Full Stack Developer, frontend and backend, Game development, Application Developent use framework is SpringBoot All About etc.",
  //     imageUrl: "/static/images/slider2.png",
  //   },
  // ]);

  // Detail.create({
  //   brandName: "Coders College",
  //   brandIconUrl: "/static/images/logo.png",
  //   links: [
  //     {
  //       label: "Home",
  //       url: "/",
  //     },
  //     {
  //       label: "About Us",
  //       url: "/about",
  //     },
  //     {
  //       label: "Gellary",
  //       url: "/gellary",
  //     },
  //     {
  //       label: "Services",
  //       url: "/services",
  //     },
  //     {
  //       label: "Contact Us",
  //       url: "/contact",
  //     },
  //   ],
  // });
});
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/static", express.static("public"));
app.use("", routes);

// tamplets engine
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

app.listen(process.env.PORT | 8080, () => {
  console.log("server started");
});

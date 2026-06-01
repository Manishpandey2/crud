require("dotenv").config();
const express = require("express");

const app = express();
require("./model/index.js");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const adminRoute = require("./routes/adminDashboarRoute.js");
const artistRoute = require("./routes/artistRoute.js");
const artRoute = require("./routes/artRoute.js");
const authRoute = require("./routes/authRoutes.js");
const contactRoute = require("./routes/contactRoute.js");
const homeRoute = require("./routes/homeRoute.js");

app.use("", adminRoute);
app.use("", artistRoute);
app.use("", artRoute);
app.use("", authRoute);
app.use("", homeRoute);
app.use("", contactRoute);

app.use(express.static("./storage/"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

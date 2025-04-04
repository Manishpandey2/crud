const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/gallery", (req, res) => {
  res.render("gallery");
});
app.get("/artists", (req, res) => {
  res.render("artists");
});
app.get("/createart", (req, res) => {
  res.render("createart");
});

app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/admin", (req, res) => {
  res.render("admin");
});

app.get("/singleart", (req, res) => {
  res.render("singleart");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/art/create", (req, res) => {
  res.send("Create Art Page");
});
app.get("/art/delete", (req, res) => {
  res.send("Delete Art Page");
});
app.get("/art/update", (req, res) => {
  res.send("Update Art Page");
});
app.get("/art", (req, res) => {
  res.send("Read Art Page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const express = require("express");
const { db } = require("./model/index.js");
const art = db.art;
const app = express();
require("./model/index.js");

const { multer, storage } = require("./middleware/multerConfig.js");

const upload = multer({ storage: storage });

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/gallery", async (req, res) => {
  const artworks = await art.findAll();
  res.render("gallery", { art: artworks });
});
app.get("/artists", (req, res) => {
  res.render("artists");
});
app.get("/createart", (req, res) => {
  res.render("createart");
});
app.post("/createart", upload.single("artworkImages"), async (req, res) => {
  res.redirect("/gallery");

  const {
    title,
    category,
    medium,
    dimensions,
    year,
    edition,
    description,
    price,
    status,
    shipping,
    framed,
    tags,
    collection,
    additionalInfo,
    artist,
  } = req.body;

  await art.create({
    title,
    description,
    price,
    category,
    status,
    image: req.file.filename,
    artist,
  });
});

app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/admin", async (req, res) => {
  const artworks = await art.findAll();

  res.render("admin", { art: artworks });
});

app.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await art.destroy({ where: { id: id } });
  res.redirect("/admin");
});

app.get("/singleart/:id", async (req, res) => {
  const id = req.params.id;
  const artwork = await art.findAll({ where: { id: id } });
  res.render("singleart", { art: artwork });
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

// edit artwork route
app.get("/editart/:id", async (req, res) => {
  const id = req.params.id;
  const artwork = await art.findAll({ where: { id: id } });
  console.log(artwork);
  res.render("editart", { art: artwork });
});
app.post("/editart/:id", upload.single("artworkImages"), async (req, res) => {
  const id = req.params.id;
  const {
    title,
    category,
    medium,
    dimensions,
    year,
    edition,
    description,
    price,
    status,
    shipping,
    framed,
    tags,
    collection,
    additionalInfo,
    artist,
  } = req.body;

  await art.update(
    {
      title,
      description,
      price,
      category,
      status,
      image: req.file.filename,
      artist,
    },
    { where: { id: id } }
  );
  res.redirect("/admin");
});
app.use(express.static("./storage/"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

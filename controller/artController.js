const { db } = require("../model");

const { art } = db;
exports.gallery = async (req, res) => {
  const artworks = await art.findAll();
  res.render("gallery", { art: artworks });
};

exports.getCreateArt = (req, res) => {
  res.render("createart");
};

exports.postCreateArt = async (req, res) => {
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
};

exports.deleteArt = async (req, res) => {
  const id = req.params.id;
  await art.destroy({ where: { id: id } });
  res.redirect("/admin");
};

exports.singleArt = async (req, res) => {
  const id = req.params.id;
  const artwork = await art.findAll({ where: { id: id } });
  res.render("singleart", { art: artwork });
};

exports.getEditArt = async (req, res) => {
  const id = req.params.id;
  const artwork = await art.findAll({ where: { id: id } });
  console.log(artwork);
  res.render("editart", { art: artwork });
};

exports.postEditArt = async (req, res) => {
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
    existingImage,
  } = req.body;
  let image = existingImage; // Default to existing image
  if (req.file) {
    image = req.file.filename; // Use new image if provided
  }

  await art.update(
    {
      title,
      description,
      price,
      category,
      status,
      image,
      artist,
    },
    { where: { id: id } },
  );
  res.redirect("/admin");
};

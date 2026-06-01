const { multer, storage } = require("../middleware/multerConfig.js");

const upload = multer({ storage: storage });
const { db } = require("../model/index.js");
const art = db.art;
const {
  gallery,
  getCreateArt,
  postCreateArt,
  deleteArt,
  singleArt,
  getEditArt,
  postEditArt,
} = require("../controller/artController");

const router = require("express").Router();

router.route("/gallery").get(gallery);
router
  .route("/createart")
  .get(getCreateArt)
  .post(upload.single("artworkImages"), postCreateArt);
router.route("/delete/:id").get(deleteArt);
router.route("/singleart/:id").get(singleArt);
router
  .route("/editart/:id")
  .get(getEditArt)
  .post(upload.single("artworkImages"), postEditArt);

module.exports = router;

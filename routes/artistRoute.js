const { getArtists } = require("../controller/artistController");

const router = require("express").Router();

router.route("/artists").get(getArtists);

module.exports = router;

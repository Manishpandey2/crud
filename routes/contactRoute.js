const { getContact } = require("../controller/contactController");

const router = require("express").Router();

router.route("/contact").get(getContact);

module.exports = router;

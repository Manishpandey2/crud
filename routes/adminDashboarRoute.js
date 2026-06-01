const { adminDashboard } = require("../controller/adminDashboardController");

const router = require("express").Router();

router.route("/admin").get(adminDashboard);

module.exports = router;

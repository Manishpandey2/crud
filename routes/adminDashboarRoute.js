const { adminDashboard } = require("../controller/adminDashboardController");

const router = require("express").Router();

router.route("/admindashboard").get(adminDashboard);

module.exports = router;

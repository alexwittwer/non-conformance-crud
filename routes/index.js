const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/start", (req, res, next) => {
  res.render("add_landing");
});

module.exports = router;

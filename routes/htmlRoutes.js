var router = require("express").Router();
var path = require("path");

// Render tables.html at the "/tables" path
router.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/tables.html"));
});

// Render reserve.html at the "/reserve" path
router.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/reserve.html"));
});

// All other paths serve the home.html page
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = router;

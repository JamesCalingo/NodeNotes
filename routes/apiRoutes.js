var router = require("express").Router();
var connection = require("../db/connection");

// Get all tables that aren't waiting
router.get("/api/tables", function(req, res) {
  connection.query("SELECT * FROM tables WHERE isWaiting = FALSE", function(err, dbTables) {
    res.json(dbTables);
  });
});

// Save a new table
// Set isWaiting to true if there are already 5 or more "seated" tables
router.post("/api/tables", function(req, res) {
  connection.query("SELECT COUNT(IF(isWaiting = FALSE, 1, NULL)) 'count' FROM tables", function(err, dbSeated) {
    if (err) throw err;

    if (dbSeated[0].count > 4) {
      req.body.isWaiting = true;
    }

    connection.query("INSERT INTO tables SET ?", req.body, function(err, result) {
      if (err) throw err;

      res.json(result);
    });
  });
});

// Get all tables where isWaiting is true (waiting list)
router.get("/api/waitlist", function(req, res) {
  connection.query("SELECT * FROM tables WHERE isWaiting = TRUE", function(err, dbTables) {
    res.json(dbTables);
  });
});

// Clear all tables
router.delete("/api/tables", function(req, res) {
  connection.query("DELETE FROM tables", function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;

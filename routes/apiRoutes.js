var router = require("express").Router();
var connection = require("../db/connection");

router.get("/api/notes", function(req, res) {
  connection.query("SELECT * FROM notes", function(err, notetaker_db) {
    if (err) {
      return res.json(err);
    }
    res.json(notetaker_db);
  });
});

router.post("/api/notes", function(req, res) {
  
    connection.query("INSERT INTO notes SET ?", req.body, function(err, result) {
      if (err) throw err;

      res.json(result);
    });
  });

router.delete("/api/notes/:id", function(req, res) {
  connection.query("DELETE FROM notes WHERE id = ?",[req.params.id], function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;

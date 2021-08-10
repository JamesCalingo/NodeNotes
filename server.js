const express = require("express");

// Tells node that we are creating an "express" server
var app = express();
var PORT = process.env.PORT || 4000;

const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// Sets up route middleware
// Use the apiRoutes file for any apiRoutes
// Use the htmlRoutes file for all other routes
require("./routes/apiRoutesNotes")(app)
require("./routes/apiRoutesUsers")(app)
require("./routes/htmlRoutes")(app)

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
  });
});

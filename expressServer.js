// Dependencies
// =============================================================
var express = require("express");
var PORT = process.env.PORT || 8080

// Sets up the Express App
// =============================================================
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//=======================================================
require("./routes/apiRoutes")(app);
require("./routes/htmlRoute")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

var path = require("path");


/*app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });

  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });

*/


module.exports = function(app){


    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/tables.html"));
      });

      app.get("/reserve", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/reservation.html"));
      });
      app.get("/*",function(req,res){
        res.sendFile(path.join(__dirname,"../public/index.html"));
      });
};
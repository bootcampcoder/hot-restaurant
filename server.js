// Dependencies
// =============================================================
var express = require("express");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var tableArray = 
[
{   customerName: "Raj",
    customerEmail: "raj@gmail.com",
    customerID: "raj123",
    phoneNumber: "000-000-0000",
    date:new Date(),
   // time: timepicker({timeFormat: 'h:mm p' })
},
{   customerName: "Ravi",
    customerEmail: "ravi@gmail.com",
    customerID: "ravi234",
    phoneNumber: "000-000-0000",
    date:new Date(),
   // time: timepicker({timeFormat: 'h:mm p' })
},
{   customerName: "Tej",
    customerEmail: "tej@gmail.com",
    customerID: "tej234",
    phoneNumber: "000-000-0000",
    date:new Date(),
    //time: timepicker({timeFormat: 'h:mm p' })
},
{   customerName: "David",
    customerEmail: "david@gmail.com",
    customerID: "david123",
    phoneNumber: "000-000-0000",
    date:new Date(),
    //time: timepicker({timeFormat: 'h:mm p' })
},
{   customerName: "Fill",
    customerEmail: "fill@gmail.com",
    customerID: "fill234",
    phoneNumber: "000-000-0000",
    date:new Date(),
    //time: timepicker({timeFormat: 'h:mm p' })
},

]

var waitingArray = 
[
{   customerName: "Joe",
    customerEmail: "joe@gmail.com",
    customerID: "joe234",
    phoneNumber: "000-000-0000",
    date:new Date(),
    //time: timepicker({timeFormat: 'h:mm p' })
},
{   customerName: "Dilli",
    customerEmail: "dilli@gmail.com",
    customerID: "dilli234",
    phoneNumber: "000-000-0000",
    date:new Date(),
    //time: timepicker({timeFormat: 'h:mm p' })
},
{   customerName: "Hari",
    customerEmail: "hari@gmail.com",
    customerID: "hari234",
    phoneNumber: "000-000-0000",
    date:new Date(),
    //time: timepicker({timeFormat: 'h:mm p' })
},
{   customerName: "tom",
    customerEmail: "tom@gmail.com",
    customerID: "tom123",
    phoneNumber: "000-000-0000",
    date:new Date(),
   // time: timepicker({timeFormat: 'h:mm p' })
},
{   customerName: "Peter",
    customerEmail: "peter@gmail.com",
    customerID: "peter234",
    phoneNumber: "000-000-0000",
    date:new Date(),
   // time: timepicker({timeFormat: 'h:mm p' })
},

]
// Routes FOR TABLE ARRAY
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all characters
app.get("/api/tableArray", function(req, res) {
  return res.json(tableArray);
});

// Displays a single character, or returns false
app.get("/api/tableArray/:character", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < tableArray.length; i++) {
    if (chosen === tableArray[i].customerName) {
      return res.json(customerName[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/tableArray", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newTable = req.body;

  console.log(newTable);

  // We then add the json the user sent to the character array
  tableArray.push(newTable);

  // We then display the JSON to the users
  res.json(newTable);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




// Routes FOR WAITING LIST
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  
  // Displays all characters
  app.get("/api/waitingArray", function(req, res) {
    return res.json(waitingArray);
  });
  
  // Displays a single character, or returns false
  app.get("/api/waitingArray/:character", function(req, res) {
    var chosen = req.params.character;
  
    console.log(chosen);
  
    for (var i = 0; i < waitingArray.length; i++) {
      if (chosen === waitingArray[i].customerName) {
        return res.json(customerName[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New Characters - takes in JSON input
  app.post("/api/waitingArray", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var waitingTable = req.body;
  
    console.log(waitingTable);
  
    // We then add the json the user sent to the character array
    waitingArray.push(waitingTable);
  
    // We then display the JSON to the users
    res.json(waitingTable);
  });
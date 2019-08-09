var table = require("../data/tableData");
var wait = require("../data/waitinglistData");

module.exports=function(app){

/* // Displays all characters
  app.get("/api/characters", function(req, res) {
    return res.json(characters);
  });
   */

app.get("/api/tables",function(req,res){
    res.json(table);
});
app.get("/api/waitingList",function(req,res){

    res.json(wait);
});
/*  
  // Displays a single character, or returns false
  app.get("/api/characters/:character", function(req, res) {
    var chosen = req.params.character;
  
    console.log(chosen);
  
    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
  
    return res.json(false);
  });
  */

/*
  // Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newCharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});


*/



app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    

    if(table.length < 5)
    {
        table.push(req.body);
        res.json(true);
    }
    else{

        wait.push(req.body);
        res.json(false);    
    }
  });



}

  
 

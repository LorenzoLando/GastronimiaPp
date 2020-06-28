const express = require("express"),
	  app = express(), 
	  viewEngine = require("view-engine"), 
	  bodyParser = require("body-parser"), 
	  mongoose = require("mongoose"), 
	  passport = require("passport"), 
	  LocalStrategy = require("passport-local"); 
	
//database connection via mongoose
mongoose.connect("mongodb://localhost:27017f/gastronomia", {useNewUrlParser: true});
//package to eliminate ejs etensions
app.set("view engine", "ejs");
//using static files from the public directory
app.use(express.static(__dirname + "/public"));  
//setto l`utilizzo del bodyparser pacchetto che permette di la request.body in un oggetto js
app.use(bodyParser.urlencoded({ extended: true })); 
//requiring the router folder aka requiring index.js of the router folder
app.use(require('./routes'));




//listening for rwquests on the specified port
app.listen(3000, () => {
  console.log("Gastronomia app has started!");
});
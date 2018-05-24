var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//stores data from users
var friends = [];

//route users to html pages

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
})

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "survey.html"));
})

//route users to api pages

app.get("/api/friends", function(req, res){
    return res.json(friends);
});
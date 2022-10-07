var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Welcome to the first assignment !");
});

app.listen(3000, function(){
    console.log('App assignment 1 listening on port 3000!')
});
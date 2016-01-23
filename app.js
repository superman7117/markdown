'use strict';

var PORT = 4000;
// var DATAFILE = './todos.json';

var express = require('express');
var marked = require('marked')
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var fs = require('fs');
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));

app.get("/", function(req, res){
  var html = fs.readFileSync("index.html").toString();
  res.send(html)
});

app.post('/squack', function(req, res) {
    var squack = req.body.squack
    var speak = marked(squack)
    console.log(speak);
    res.send(speak);

});


app.listen(PORT, function() {
  console.log(`server listening on port ${PORT}.`);
});

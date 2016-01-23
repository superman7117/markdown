var express= require('express')
var router = express.Router()
var marked = require('marked')

router.post('/', function(req, res){
  var squack = req.body.squack
  var speak = marked(squack)
  console.log(speak);
  res.send(speak);
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

 router.post("/" ,function(req,res,next){
  //add a new user
  
 }
 )

module.exports = router;

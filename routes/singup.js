var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
//var db = mongojs('mongodb://ender:1234@ds153682.mlab.com:53682/mytasklist_ender', ['tasks']);
var db = mongojs('mongodb://ender:1234@localhost:27017/mytasklist_ender', ['tasks']);

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the login route
router.get('/singup', function(req, res, next){
    res.render('singup.mus');
});

module.exports = router
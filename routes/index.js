var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res, next){
    res.render('index.mus');
});
// define the login route
router.get('/login', function (req, res) {
  res.send('login');
});

// define the singup route
router.get('/singup', function (req, res) {
  res.send('singup');
});

// define the logout route
router.get('/logout', function (req, res) {
  res.send('logout');
});

module.exports = router
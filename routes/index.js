var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
//var db = mongojs('mongodb://ender:1234@ds153682.mlab.com:53682/mytasklist_ender', ['tasks']);
var db = mongojs('mongodb://ender:1234@localhost:27017/mytasklist_ender', ['subject']);

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
/*router.get('/', function(req, res, next){
    res.render('index.mus');
});*/

// define the logout route
router.get('/logout', function (req, res) {
  res.send('logout');
});

// Get all subjects and show on index page

router.get('/', function(req, res, next){
    db.subject.find(function(err, index){
        if(err){
            res.send(err);
        }
        //res.json(index);
        res.render('index',{subjects:index});
    });
}); 

module.exports = router
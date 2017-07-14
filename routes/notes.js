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

// define the note route
router.get('/notes', function(req, res, next){
    res.render('notes.mus');
});

// Get Notes up to subjects

/*router.get('/notes/:id', function(req, res, next){
    db.tasks.find({_id: mongojs.ObjectId(req.params.id)}, function(err, notes){
        if(err){
            res.send(err);
        }
        //res.json(notes);
        res.render('index',{subjects:notes});
    });
});*/

// Get all subjects and show on index page

/*router.get('/note/:id', function(req, res, next){
    db.subject.findOne(function(err, notes){
        if(err){
            res.send(err);
        }
        res.json(notes);
        //res.render('notes',{subjects:notes});
    });
});*/

router.get('/note/:id', function(req, res, next){
    db.subject.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, note){
        if(err){
            res.send(err);
        }
        //res.json(note);
        res.render('notes',{subjects:note});
    });
});



router.get('/notes/addNote', function(req, res, next){
    res.render('addNote.mus');
});

module.exports = router

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
// Get All Tasks
router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
}); 

// Get Single Task

router.get('/task/:id', function(req, res, next){
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

// Save Task

router.post('/task', function(req, res, next){
    var task = req.body;
    if(!task.title || task.isDone + ''){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else{
        db.tasks.save(task, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});

// Delete Task

router.delete('/task/:id', function(req, res, next){
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});


// Update Task

router.put('/task/:id', function(req, res, next){
    var task = req.body;
    var updTask = {};

    if(task.isDone){
        updTask.isDone = task.isDone;
    }

    if(task.title){
        upTask.title = task.title;
    }

    if(!updTask){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else{
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });   
    }
});


// define the about route
router.get('/about', function (req, res) {
  res.send('About birds');
});

module.exports = router

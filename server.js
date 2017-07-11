var express = require('express');
var path = require('path');
var mustache = require('mustache-express');
var bodyParser = require('body-parser');


var index = require('./routes/index.js');
var tasks = require('./routes/tasks.js');

var port = 3000;

var app = express();

//View Engine

app.engine('mus', mustache());
app.set('view engine', 'mus');
app.set('views', path.join(__dirname, 'views'));
//app.set('views', __dirname + '/views');
//app.engine('html', require('mus').renderFile);**

// Set Satatic Folder
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
    console.log('Server started on port '+port);
})
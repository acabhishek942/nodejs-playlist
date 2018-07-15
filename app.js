var express = require('express');
var todoController = require('./controllers/todoController')
var app = express();

// set up template engine
app.set('view engine', 'ejs');

// set up static files
app.use(express.static('./public'));

// fire controllers
todoController(app);

//listen to port
console.log("3000 port listening");

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// connect to mlab DB
mongoose.connect('mongodb://test:testing1@ds137957.mlab.com:37957/acabhishek42_todo')

// create schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
  item: String
})

var Todo = mongoose.model('Todo', todoSchema);

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// var data = [{item: 'get milk'}, {item: 'go out'}, {item: 'anf snn'}]

module.exports = function(app){

  app.get('/todo', function(req, res){
    // get data from mlab and pass it to the view
    Todo.find({}, function(err, data){
      if (err) throw err;
      res.render('todo', {todos: data});
    });

  });

  app.post('/todo', urlencodedParser, function(req, res){
    // get data from the view and add it to mongodb
    var newTodo = Todo(req.body).save(function(err, data){
      if (err) throw err;
      res.json(data);
    });
  });

  app.delete('/todo/:item', function(req, res){
    // delete requested item from mongo db
    Todo.find({item: req.params.item.replace(/\-/g, ' ')}).remove(function(err, data){
      if (err) throw err;
      res.json(data);
    })
  });

};

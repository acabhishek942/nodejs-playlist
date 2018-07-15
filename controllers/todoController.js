var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// connect to mlab DB
mongoose.connect('mongodb://test:testing1@ds137957.mlab.com:37957/acabhishek42_todo')

// create schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
  item: String
})

var Todo = mongoose.model('Todo', todoSchema);

var item1 = Todo({item: 'Buy flowers'}).save(function(err){
  if (err) throw err;
  console.log('Item saved');
});

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var data = [{item: 'get milk'}, {item: 'go out'}, {item: 'anf snn'}]

module.exports = function(app){

  app.get('/todo', function(req, res){
    res.render('todo', {todos: data});
  });

  app.post('/todo', urlencodedParser, function(req, res){
    data.push(req.body);
    res.json(data);
  });

  app.delete('/todo/:item', function(req, res){
    data = data.filter(function(todo){
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);
  });

};

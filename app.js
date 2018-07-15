var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'))

app.get('/', function(req, res){
  res.render('index', );
});

app.get('/contact', function(req, res){
  console.log(req.query);
  res.render('contact', {qs: req.query});
});

app.get('/profile/:name', function(req, res){
  var data = {
    'age': 29,
    'job': 'Ninja',
    'hobbies': ['eating', 'fighting', 'singing']
  }
  res.render('profile', {person: req.params.name, data: data});
})


app.listen(3000);

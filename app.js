var http = require('http');
var fs = require('fs');



var server = http.createServer(function(req, res){
  console.log('req was made' + req.url);
  res.writeHead(200, {'Content-Type': 'application.json'});
  var myObjc = {
    'name': 'Ryu',
    'job': 'Ninja',
    'age': 29
  }
  res.end(JSON.stringify(myObjc));
});

server.listen(8080, '127.0.0.1');
console.log('8080 port open');

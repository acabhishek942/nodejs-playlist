var http = require('http');

var server = http.createServer(function(req, res){
  console.log('req was made' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hey Ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('300 port open');

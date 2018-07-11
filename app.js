var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/writee.txt', 'utf8');

myReadStream.on('data', function(chunk){
  console.log('New chunk received');
  console.log(chunk);
});

// var server = http.createServer(function(req, res){
//   console.log('req was made' + req.url);
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hey Ninjas');
// });
//
// server.listen(3000, '127.0.0.1');
// console.log('300 port open');

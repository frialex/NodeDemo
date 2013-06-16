var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Node Demo\n');
}).listen(2000, '127.0.0.1');

console.log('Server running at http://localhost:2000')
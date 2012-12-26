var http;
var requestListener;
var server;

http = require('http');
requestListener = function (req, res) {
  res.writeHead(200);
  res.end();
}
server = http.createServer(requestListener);

server.listen(8080);

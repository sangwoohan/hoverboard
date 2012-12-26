var http;

http = require('http');

function listen(listener, port) {
  http.createServer(listener).listen(port);
}

exports.listen = listen;

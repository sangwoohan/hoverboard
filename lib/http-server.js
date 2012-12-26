var http;

http = require('http');

function listen(port, listener) { 
  http.createServer(listener).listen(port);
}

exports.listen = listen;

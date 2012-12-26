var http;

http = require('http');

function listen(listener, port) {
  var server;

  server = http.createServer(listener);

  server.listen(port);

  return server;
}

exports.listen = listen;

var socket;

socket = require('ws');

function listen(httpServer) {
  new socket.Server({ server: httpServer });
}

exports.listen = listen;

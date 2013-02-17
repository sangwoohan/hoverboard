var socket;

socket = require('ws');

exports.listen = function (httpServer) {
  return new socket.Server({ server: httpServer });
};

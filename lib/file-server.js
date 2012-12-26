var static;
var server;

static = require('node-static');
server = new static.Server();

function setRoot(path) {
  server.root = server.resolve(path);
}

function listener(req, res) {
  server.serve(req, res);
}

exports.setRoot = setRoot;
exports.listener = listener;

var static;
var server;

static = require('node-static')

function setDir(dir) {
  server = new static.Server(dir);
}

function listener(req, res) {
  server.serve(req, res);
}

exports.setDir = setDir;
exports.listener = listener;

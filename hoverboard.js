var port;
var httpServer;
var fileServer;
var socketServer;

port = 8080;
httpServer = require('./lib/http-server');
fileServer = require('./lib/file-server');
socketServer = require('./lib/socket-server');

fileServer.setRoot('./public');
socketServer.listen(httpServer.listen(fileServer.listener, port));

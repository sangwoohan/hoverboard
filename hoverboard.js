var port;
var httpServer;
var fileServer;
var socketServer;
var fileServerRoot;
var quartzEventServices;

port = 8080;
fileServerRoot = './public';
httpServer = require('./lib/http-server');
fileServer = require('./lib/file-server');
socketServer = require('./lib/socket-server');
quartzEventServices = require('./lib/quartz-event-services');

fileServer.setRoot(fileServerRoot);

quartzEventServices.initialize(
  socketServer.listen(httpServer.listen(fileServer.listener, port))
);

var httpServer;
var fileServer;

httpServer = require('./lib/http-server');
fileServer = require('./lib/file-server');

fileServer.setRoot('./public');
httpServer.listen(fileServer.listener, 8080);

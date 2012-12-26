var httpServer;
var fileServer;

httpServer = require('./lib/http-server');
fileServer = require('./lib/file-server');

fileServer.setDir('./public');
httpServer.listen(8080, fileServer.listener);

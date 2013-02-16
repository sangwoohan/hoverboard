var services;

services = require('quartz-event-services');

exports.initialize = function (socketServer) {
  socketServer.on('connection', function (socket) {
    socket.on('message', function(message) {
      var event;

      event = JSON.parse(message);

      switch(event.type) {
        case 'mouseMoved':
          console.log('mouseMoved');
          break;
      };
    });
  });
};

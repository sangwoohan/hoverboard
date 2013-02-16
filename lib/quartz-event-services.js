var services;

services = require('quartz-event-services');

exports.initialize = function (socketServer) {
  socketServer.on('connection', function (socket) {
    socket.on('message', function(message) {
      var eventType;
      var quartzEvent;
      var socketEvent;

      socketEvent = JSON.parse(message);
      eventType = socketEvent.type;
      quartzEvent = new services.Event();

      quartzEvent.setType(eventType);

      switch(eventType) {
        case 'mouseMoved':
          quartzEvent.setLocation(0.0, 0.0);
          break;
      };

      quartzEvent.post();
    });
  });
};

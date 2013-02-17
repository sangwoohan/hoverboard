var services;

services = require('quartz-event-services');

exports.initialize = function (socketServer) {
  socketServer.on('connection', function (socket) {
    socket.on('message', function(message) {
      var eventType;
      var quartzEvent;
      var socketEvent;
      var mouseLocation;
      var x;
      var y;

      socketEvent = JSON.parse(message);
      eventType = socketEvent.type;
      quartzEvent = new services.Event();

      quartzEvent.setType(eventType);

      switch(eventType) {
        case 'mouseMoved':
          mouseLocation = quartzEvent.getLocation();
          x = mouseLocation.x + socketEvent.deltaTranslationX;
          y = mouseLocation.y + socketEvent.deltaTranslationY;

          quartzEvent.setLocation(x, y);

          break;
      };

      quartzEvent.post();
    });
  });
};

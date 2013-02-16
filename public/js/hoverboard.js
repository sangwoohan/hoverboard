var socket;

socket = new WebSocket("ws://" + location.host);

socket.onopen = function() {
  var target;
  var mousingHandler;

  target = document.body;

  mousingHandler = function(recognizer){
    switch(recognizer.state) {
      case 'began':
        console.log('mousing gesture began');
        break;
      case 'changed':
        console.log('mousing gesture changed');
        break;
      case 'ended':
        console.log('mousing gesture ended');
        recognizer.reset();
        break;
    };
  };

  new PanGestureRecognizer(target, mousingHandler);
};

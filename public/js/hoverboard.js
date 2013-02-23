var socket;

socket = new WebSocket("ws://" + location.host);

socket.onopen = function() {
  var target;
  var mousingHandler;
  var lastRecordedTime;
  var lastTranslationX;
  var lastTranslationY;
  var mouseSensivity;
  var mouseSpeed;

  target = document.body;
  mouseSensivity = 5;

  mousingHandler = function(recognizer){
    var event;
    var translationX;
    var translationY;
    var velocity;

    switch(recognizer.state) {
      case 'began':
      case 'changed':
        velocity = recognizer.velocity;
        translationX = recognizer.translationX * velocity;
        translationY = recognizer.translationY * velocity;

        event = {};
        event.type = 'mouseMoved';
        event.translationX = translationX;
        event.translationY = translationY;

        recognizer.setTranslation(0, 0);
        socket.send(JSON.stringify(event));

        break;
      case 'ended':
        recognizer.reset();

        break;
    };
  };

  new PanGestureRecognizer(target, mousingHandler);
};

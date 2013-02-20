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
    var recordedTime;
    var deltaTranslationX;
    var deltaTranslationY;
    var deltaRecordedTime;
    var distance;
    var velocity;

    recordedTime = recognizer.lastRecordedTime;
    translationX = recognizer.translationX;
    translationY = recognizer.translationY;

    event = {
      type: 'mouseMoved',
      deltaTranslationX: 0,
      deltaTranslationY: 0
    };

    switch(recognizer.state) {
      case 'began':
        break;
      case 'changed':
        deltaRecordedTime = recordedTime - lastRecordedTime;
        deltaTranslationX = translationX - lastTranslationX;
        deltaTranslationY = translationY - lastTranslationY;

        distance = Math.sqrt(
          Math.pow(deltaTranslationX, 2) + Math.pow(deltaTranslationY, 2)
        );

        velocity = distance / deltaRecordedTime;
        mouseSpeed = velocity * mouseSensivity;

        event.deltaTranslationX = deltaTranslationX * mouseSpeed;
        event.deltaTranslationY = deltaTranslationY * mouseSpeed;

        break;
      case 'ended':
        recognizer.reset();

        break;
    };

    socket.send(JSON.stringify(event));

    lastRecordedTime = recordedTime;
    lastTranslationX = translationX;
    lastTranslationY = translationY;
  };

  new PanGestureRecognizer(target, mousingHandler);
};

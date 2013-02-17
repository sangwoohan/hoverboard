var socket;

socket = new WebSocket("ws://" + location.host);

socket.onopen = function() {
  var target;
  var mousingHandler;
  var lastTranslationX;
  var lastTranslationY;

  target = document.body;

  mousingHandler = function(recognizer){
    var event;
    var translationX;
    var translationY;

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
        event.deltaTranslationX = translationX - lastTranslationX;
        event.deltaTranslationY = translationY - lastTranslationY;

        break;
      case 'ended':
        recognizer.reset();

        break;
    };

    lastTranslationX = translationX;
    lastTranslationY = translationY;

    socket.send(JSON.stringify(event));
  };

  new PanGestureRecognizer(target, mousingHandler);
};

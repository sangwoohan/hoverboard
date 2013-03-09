var socket;

socket = new WebSocket("ws://" + location.host);

socket.onopen = function() {
  var panRecognizer;

  panRecognizer = gestureRecognizers.Pan(this, function(recognizer) {
    var event;

    if (
      recognizer.state == gestureRecognizers.states.began ||
      recognizer.state == gestureRecognizers.states.changed
    ) {

      event = { type: 'mouseMoved' };
      event.translationX = recognizer.translationX * recognizer.velocityX;
      event.translationY = recognizer.translationY * recognizer.velocityY;

      recognizer.setTranslation(0, 0);
      socket.send(JSON.stringify(event));
    }
  });

  gestureRecognizers.add(document.body, panRecognizer);
};

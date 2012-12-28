var socket;

socket = new WebSocket("ws://" + location.host);

function socketOpen() {
  var singleClickRecognizer;

  singleClickRecognizer = new TapRecognizer(document);

  function singleClickStart(recognizer) {
    console.log('click started');
  }

  function singleClickEnd(recognizer) {
    console.log('click ended');
  }

  singleClickRecognizer.onStart = singleClickStart;
  singleClickRecognizer.onEnd = singleClickEnd;
}

socket.onopen = socketOpen;

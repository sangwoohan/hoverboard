var socket;

socket = new WebSocket("ws://" + location.host);

function socketOpen() {
  new TapRecognizer(document);
}

socket.onopen = socketOpen;

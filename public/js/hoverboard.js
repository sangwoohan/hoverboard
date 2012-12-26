var socket;

socket = new WebSocket("ws://" + location.host);

function touchStart (event) {
  event.preventDefault();
}

function touchMove (event) {
  event.preventDefault();
}

function touchEnd (event) {
  event.preventDefault();
}

function socketOpen () {
  document.addEventListener("touchstart", touchStart, false);
  document.addEventListener("touchmove", touchMove, false);
  document.addEventListener("touchend", touchEnd, false);
}

socket.onopen = socketOpen;

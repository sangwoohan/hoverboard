var socket;

socket = new WebSocket("ws://" + location.host);

function socketOpen() {
  var mousingRecognizer;

  mousingRecognizer = new PanGestureRecognizer();

  function step() {
    if (mousingRecognizer.state == 'began') {
      console.log('mousing gesture began');
    } else if (mousingRecognizer.state == 'changed') {
      console.log('mousing gesture changed');
    }

    window.webkitRequestAnimationFrame(step);
  }

  window.webkitRequestAnimationFrame(step);
}

socket.onopen = socketOpen;

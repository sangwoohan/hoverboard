function GestureRecognizer(prototype, node) {
  function touchStart(event) {
    event.preventDefault();
    prototype.touchStart(event);
  }

  function touchMove(event) {
    event.preventDefault();
    prototype.touchMove(event);
  }

  function touchEnd(event) {
    event.preventDefault();
    prototype.touchEnd(event);
  }

  node.addEventListener('touchstart', touchStart, false);
  node.addEventListener('touchmove', touchMove, false);
  node.addEventListener('touchend', touchEnd, false);
}

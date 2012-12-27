function GestureRecognizer(node) {
  this.state = null;
  this.touches = {};
  this.tapsRequired = 1;
  this.touchesRequired = 1;

  this.touchStart = function(self, event) {
    var length;
    var touch;

    event.preventDefault();

    length = event.targetTouches.length;
    touch = event.targetTouches[length - 1];

    self.touches[touch.identifier] = touch;

    if (length == self.touchesRequired) {
      self.state = 'started';
    } else if (self.state == 'started' && length != self.touchesRequired) {
      self.state = 'ended';
    } else if (self.state == 'ended') {
      self.state = null;
    }

    return touch;
  }

  this.touchMove = function(self, event) {
    event.preventDefault();
  }

  this.touchEnd = function(self, event) {
    var key;
    var length;

    event.preventDefault();

    for (key in event.changedTouches) {
      delete self.touches[event.changedTouches[key].identifier];
    }

    if (self.state == 'ended') {
      self.state = null;
    }

    length = Object.keys(self.touches).length;

    if (self.state == 'started' && length < self.touchesRequired) {
      self.state = 'ended'
    }
  }
}

function TapRecognizer(node) {
  var self;

  self = this;

  function touchStart(event) {
    TapRecognizer.prototype.touchStart(self, event);

    if (self.state == 'started' || self.state == 'ended') {
      self.handler(self);
    }
  }

  function touchMove(event) {
    event.preventDefault();
  }

  function touchEnd(event) {
    TapRecognizer.prototype.touchEnd(self, event);
  }

  node.addEventListener('touchstart', touchStart, false);
  node.addEventListener('touchmove', touchMove, false);
  node.addEventListener('touchend', touchEnd, false);
}

TapRecognizer.prototype = new GestureRecognizer;
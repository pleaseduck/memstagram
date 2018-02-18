window.util = (function () {
  var functionsObject = {};
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  functionsObject.isEscEvent = function(evt, action) {
    if (evt.keyCode === 27) {
      action();
    }
  };

  functionsObject.isEnterEvent = function(evt, action) {
    if (evt.keyCode === 13) {
      action();
    }
  };

  functionsObject.randomInteger = function(min, max) {
      var rand = min - 0.5 + Math.random() * (max - min + 1)
      rand = Math.round(rand);
      return rand;
    };

  functionsObject.randomNumber = function(array) {
    return Math.floor(Math.random()*array.length);
  };
  return functionsObject;
})();

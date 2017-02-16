'use strict';

var valueDefault = 100;
var scale = 1;

(function () {
  var controlDec = document.querySelector('.upload-resize-controls-button-dec');
  var controlInc = document.querySelector('.upload-resize-controls-button-inc');

  var max = 100;
  var min = 25;
  var step = 25;

  // CHANGE SCALE AND CALLBACK

  window.changeScale = function (callback) {

    controlDec.addEventListener('click', function () {
      if (valueDefault > min && scale > 0.25) {
        valueDefault = valueDefault - step;
        scale = scale - 0.25;
      }
      callback();
    });

    controlInc.addEventListener('click', function () {
      if (valueDefault < max && scale < 1) {
        valueDefault = valueDefault + step;
        scale = scale + 0.25;
      }
      callback();
    });
  };
})();

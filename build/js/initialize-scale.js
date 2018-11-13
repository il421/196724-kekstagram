'use strict';
(function () {
  window.initializeScale = function (element, value, step, callback) {
    var decreasePreview = document.querySelector('.upload-resize-controls-button-dec');
    var increasePreview = document.querySelector('.upload-resize-controls-button-inc');

    var MAX_VALUE_OF_INDICATOR = 100;
    var MIN_VALUE_OF_INDICATOR = 25;

    element.addEventListener('click', function (evt) {
      if (evt.target == decreasePreview && value > MIN_VALUE_OF_INDICATOR) {
        value = value - step;
        callback(value);
      } else if (evt.target == increasePreview && value < MAX_VALUE_OF_INDICATOR) {
          value = value + step;
          callback(value);
      }
    }, true);
  }
})()

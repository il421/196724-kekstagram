'use strict';

var controlDec = document.querySelector('.upload-resize-controls-button-dec');
var controlInc = document.querySelector('.upload-resize-controls-button-inc');
var controlValue = document.querySelector('.upload-resize-controls-value');

var valueDefault = 100;
var scale = 1;

var max = 100;
var min = 25;
var step = 25;

var increaseScale = controlInc.addEventListener('click', function () {
  if (window.valueDefault < max) {
    window.valueDefault = (window.valueDefault + step);
    if (window.scale < 1) {
      window.scale = window.scale + 0.25;
    }
    createScale();
  }
});

var decreaseScale = controlDec.addEventListener('click', function () {
  if (window.valueDefault > min) {
    window.valueDefault = (window.valueDefault - step);
    if (window.scale > 0.25) {
      window.scale = window.scale - 0.25;
    }
    createScale();
  }
});

var createScale = function (param1, param2) {
  controlValue.value = valueDefault + '%';
  window.photo.style.transform = 'scale(' + (scale) + ')';
};

createScale(increaseScale, decreaseScale);

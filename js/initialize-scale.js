'use strict';

var photo = document.querySelector('.filter-image-preview');
var controlDec = document.querySelector('.upload-resize-controls-button-dec');
var controlInc = document.querySelector('.upload-resize-controls-button-inc');
var controlValue = document.querySelector('.upload-resize-controls-value');

var valueDefault = 100;
var scale = 1;

var max = 100;
var min = 25;
var step = 25;

var increaseScale = controlInc.addEventListener('click', function () {
  if (valueDefault < max && scale < 1) {
    valueDefault = valueDefault + step;
    scale = scale + 0.25;
  }
  changeScale();
});

var decreaseScale = controlDec.addEventListener('click', function () {
  if (valueDefault > min && scale > 0.25) {
    valueDefault = valueDefault - step;
    scale = scale - 0.25;
  }
  changeScale();
});

// ФУНКЦИЯ ОБРАТНОГО ВЫЗОВА
var changeScale = function (callback1, callback2) {
  controlValue.value = valueDefault + '%';
  photo.style.transform = 'scale(' + (scale) + ')';
};

changeScale(increaseScale, decreaseScale);

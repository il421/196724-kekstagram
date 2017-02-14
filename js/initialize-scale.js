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

// ФУНКЦИЯ ОБРАТНОГО ВЫЗОВА
var changeScale = function (callback) {

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

changeScale(function () {
  controlValue.value = valueDefault + '%';
  photo.style.transform = 'scale(' + (scale) + ')';
});

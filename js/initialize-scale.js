'use strict';

var controlValue = document.querySelector('.upload-resize-controls-value');
var valueDefault = 100;
var scale = 1;

window.createScale = function () {
  controlValue.value = valueDefault + '%';
  window.photo.style.transform = 'scale(' + (scale) + ')';
};

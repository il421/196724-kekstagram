'use strict';

window.initializeScale = (function () {
  var controlValue = document.querySelector('.upload-resize-controls-value');
  var scale = 1;

  return function () {
    controlValue.value = window.valueDefault + '%';
    window.photo.style.transform = 'scale(' + (scale) + ')';
  };
})();

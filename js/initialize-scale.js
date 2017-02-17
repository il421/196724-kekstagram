'use strict';

(function () {
  var controlDec = document.querySelector('.upload-resize-controls-button-dec');
  var controlInc = document.querySelector('.upload-resize-controls-button-inc');


  // CHANGE SCALE AND CALLBACK

  window.decreaseScale = function (callback) {
    controlDec.addEventListener('click', callback);
  };

  window.increaseScale = function (callback) {
    controlInc.addEventListener('click', callback);
  };
})();

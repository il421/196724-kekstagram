'use strict';

(function () {
  var controlDec = document.querySelector('.upload-resize-controls-button-dec');
  var controlInc = document.querySelector('.upload-resize-controls-button-inc');

  window.changeScale = function (callback) {

    controlDec.addEventListener('click', callback);
    controlInc.addEventListener('click', callback);
  };
})();

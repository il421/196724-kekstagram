'use strict';
(function () {
  window.enableSetup = function (element, callback) {
    element.addEventListener('click', callback);
    element.addEventListener('keydown', function(evt) {
      if (window.utils.isActiavateEvent(evt)) {
        callback();
      }
    });
  }
})()

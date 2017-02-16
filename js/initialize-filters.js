'use strict';

(function () {
  var filterControls = document.querySelector('.upload-filter-controls');

  window.changeFilters = function (callback) {
    filterControls.addEventListener('focus', callback, true);

    filterControls.addEventListener('keydown', function (evt) {
      if (window.utils.isActiavateEvent(evt)) {
        callback(evt);
      }
    }, true);
  };
})();

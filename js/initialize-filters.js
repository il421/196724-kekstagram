'use strict';

(function () {
  var filterControls = document.querySelector('.upload-filter-controls');

  window.changeFilters = function (callback) {

    filterControls.addEventListener('focus', callback, true);
    filterControls.addEventListener('keydown', callback, true);
  };
})();

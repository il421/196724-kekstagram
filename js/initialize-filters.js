'use strict';

(function () {
  var photo = document.querySelector('.filter-image-preview');
  var filterControls = document.querySelector('.upload-filter-controls');

  // SELECT FILTER AND CALLBACK
  var changeFilters = function (callback) {
    filterControls.addEventListener('focus', callback, true);

    filterControls.addEventListener('keydown', function (evt) {
      if (window.utils.isActiavateEvent(evt)) {
        callback(evt);
      }
    }, true);
  };

  changeFilters(function (evt) {
    photo.className = 'filter-image-preview ' + evt.target['htmlFor'].substring(7);
  });
})();

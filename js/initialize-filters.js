'use strict';

window.initializeFilters = function (evt) {
  window.photo.className = 'filter-image-preview ' + evt.target['htmlFor'].substring(7);
};

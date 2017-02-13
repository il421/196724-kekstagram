'use strict';
var photo = document.querySelector('.filter-image-preview');

window.initializeFilters = function (evt) {
  photo.className = 'filter-image-preview ' + evt.target['htmlFor'].substring(7);
};

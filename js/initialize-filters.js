'use strict';
(function () {
  window.initializeFilters = function (element, callback) {
    element.addEventListener('focus', callback, true);
    element.addEventListener('keyup', callback, true);
  }
})()

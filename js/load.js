'use strict';

(function () {
  var DATA_MY = '../data.json';
  window.load = function (onload) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onload);
    xhr.open('GET', DATA_MY);
    xhr.send();
  };
})();

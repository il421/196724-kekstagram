'use strict';

(function () {
  var ACADEMY_DATE = 'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';
  window.load = function (onload) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onload);
    xhr.open('GET', ACADEMY_DATE);
    xhr.send();
  };
})();

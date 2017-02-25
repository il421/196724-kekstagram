'use strict';

(function () {
  var filterControls = document.querySelector('.upload-filter-controls');

  window.changeFilters = function (callback) {

    filterControls.addEventListener('focus', callback, true);
    filterControls.addEventListener('keydown', callback, true);
  };
})();

// SLIDER OF FILTERS
(function () {
  var filterLine = document.querySelector('.upload-filter-level-line');
  var filterPin = filterLine.querySelector('.upload-filter-level-pin');
  var filterVal = filterLine.querySelector('.upload-filter-level-val');
  var photoPreview = document.querySelector('.upload-form-preview');

  var startPoint;

  var onMouseMove = function (evtMove) {
    evtMove.preventDefault();

    var shift = {
      x: startPoint.x - evtMove.clientX,
    };

    var positionX = filterPin.offsetLeft - shift.x;

    if (positionX < 0) {
      positionX = 0;
    } else if (positionX > filterLine.offsetWidth) {
      positionX = filterLine.offsetWidth;
    }

    filterPin.style.left = ((positionX * 100) / filterLine.offsetWidth) + '%';
    filterVal.style.width = ((positionX * 100) / filterLine.offsetWidth) + '%';
    photoPreview.style.filter = ' saturate(' + ((positionX * 100) / filterLine.offsetWidth) + '%' + ')';

    startPoint = {
      x: evtMove.clientX,
    };
  };

  var onMouseUp = function (evtUp) {
    evtUp.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  filterPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    startPoint = {
      x: evt.clientX
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();

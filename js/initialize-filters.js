'use strict';

(function () {
  var SIZE_OF_LINE = 456;
  var STARTING_POINT = 0;
  var UTILITY_FOR_PERCENT = 100;

  var filterControls = document.querySelector('.upload-filter-controls');
  var filterLine = document.querySelector('.upload-filter-level-line');
  var filterPin = filterLine.querySelector('.upload-filter-level-pin');
  var filterVal = filterLine.querySelector('.upload-filter-level-val');
  var photoPreview = document.querySelector('.upload-form-preview');

  var startPoint;

  // CHANGE FILTERS
  window.changeFilters = function (callback) {

    filterControls.addEventListener('focus', callback, true);
    filterControls.addEventListener('keydown', callback, true);
  };

  // SLIDER OF FILTERS
  var onMouseMove = function (evtMove) {
    evtMove.preventDefault();

    var shift = {
      x: startPoint.x - evtMove.clientX,
    };

    var positionX = filterPin.offsetLeft - shift.x;

    if (positionX < STARTING_POINT) {
      positionX = STARTING_POINT;
    } else if (positionX > SIZE_OF_LINE) {
      positionX = SIZE_OF_LINE;
    }

    filterPin.style.left = ((positionX * UTILITY_FOR_PERCENT) / SIZE_OF_LINE) + '%';
    filterVal.style.width = ((positionX * UTILITY_FOR_PERCENT) / SIZE_OF_LINE) + '%';
    photoPreview.style.filter = ' saturate(' + ((positionX * UTILITY_FOR_PERCENT) / SIZE_OF_LINE) + '%' + ')';

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

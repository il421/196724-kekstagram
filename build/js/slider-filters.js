'use strict';
(function () {
  window.slideFeaturePicture = function () {
    var STARTING_POINT = 0;
    var END_POINT = 455;

    var filterPin = document.querySelector('.upload-filter-level-pin');
    var filterVal = document.querySelector('.upload-filter-level-val');
    var photoPreview = document.querySelector('.upload-form-preview');

    var startPoint;

    var onMouseMove = function (moveEvt) { //Function of Moving Mouse
      moveEvt.preventDefault();

      var shift = startPoint - moveEvt.pageX;
      var positionX = filterPin.offsetLeft - shift;

      if (positionX < STARTING_POINT) {
        positionX = STARTING_POINT;
      } else if (positionX > END_POINT) {
        positionX = END_POINT;
      } else {
        filterPin.style.left = (positionX) + 'px';
        filterVal.style.width = (positionX) + 'px';
        photoPreview.style.filter = 'saturate(' + (positionX / END_POINT) + ')';
      }

      startPoint = moveEvt.pageX;
    };

    var onMouseUp = function (upEvt) { //Function of Up Mouse
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    filterPin.addEventListener('mousedown', function(evt) { //Function of Down Mouse
      evt.preventDefault();

      startPoint = evt.pageX;

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  }
})()

'use strict';

(function () {
  window.dragAndDrop = function () {
    var startPoint;

    var onMouseMove = function (moveEvt) { //Function of Moving Mouse
      moveEvt.preventDefault();
      // var box = window.uploadOverlay.getBoundingClientRect();

      var shift = {
        x: startPoint.x - moveEvt.pageX,
        y: startPoint.y - moveEvt.pageY
      };

      window.uploadOverlay.style.top = (window.uploadOverlay.offsetTop - shift.y) + 'px';
      window.uploadOverlay.style.left = (window.uploadOverlay.offsetLeft - shift.x) + 'px';

      startPoint = {
        x: moveEvt.pageX,
        y: moveEvt.pageY
      };
    };

    var isDragging = false;

    var onMouseUp = function (upEvt) { //Function of Up Mouse
      upEvt.preventDefault();
      isDragging = false;

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    window.filterImagePreview.addEventListener('mousedown', function(evt) { //Function of Down Mouse
      evt.preventDefault();

      if(isDragging) {
      onMouseUp();
    }

    isDragging = true;

      startPoint = {
        x: evt.pageX,
        y: evt.pageY
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  }
})()

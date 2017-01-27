'use strict';


var uploadOverlay = document.querySelector('.upload-overlay');
var uploadFile = document.querySelector('.upload-input');
var uploadFormCancel = document.querySelector('.upload-form-cancel');
var filterImagePreview = document.querySelector('.filter-image-preview');
var filters = document.querySelectorAll('.upload-filter-controls input');
var setOfFilters = [
  '',
  'filter-chrome',
  'filter-sepia',
  'filter-marvin',
  'filter-phobos',
  'filter-heat'
];

var controlDec = document.querySelector('.upload-resize-controls-button-dec');
var controlInc = document.querySelector('.upload-resize-controls-button-inc');
var controlValue = document.querySelector('.upload-resize-controls-value');

// ЗАДАНИЕ 1
if (uploadFile.required) {
  uploadOverlay.classList.remove('invisible');
}

// ЗАДАНИЕ 2
uploadFormCancel.addEventListener('click', function () {
  uploadOverlay.classList.add('invisible');
});

// ЗАДАНИЕ 3
for (var i = 0; i < filters.length; i++) {
  filters[0].addEventListener('click', function () {
    filterImagePreview.classList.remove(setOfFilters[i]);
  });

  filters[1].addEventListener('click', function () {
    filterImagePreview.classList.remove(setOfFilters[i]);
    filterImagePreview.classList.add(setOfFilters[1]);
  });
}

// ЗАДАНИЕ 4
var max = 100;
var min = 25;
var step = 25;
var valueDefault = 100;
var scale = 1;

controlValue.value = '100%';
for (i = 0; i < 1; i++) {
  controlDec.addEventListener('click', function () {
    if (valueDefault > min) {
      valueDefault = (valueDefault - step);
    }
    controlValue.value = valueDefault + '%';
    if (scale > 0.25) {
      scale = scale - 0.25;
    }
    filterImagePreview.style.transform = 'scale(' + (scale) + ')';
  });

  controlInc.addEventListener('click', function () {
    if (valueDefault < max) {
      valueDefault = (valueDefault + step);
    }
    controlValue.value = valueDefault + '%';
    if (scale < 1) {
      scale = scale + 0.25;
    }
    filterImagePreview.style.transform = 'scale(' + (scale) + ')';
  });
}

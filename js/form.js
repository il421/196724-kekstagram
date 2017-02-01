'use strict';

var uploadOverlay = document.querySelector('.upload-overlay');
var uploadFile = document.querySelector('.upload-input');
var uploadFormCancel = document.querySelector('.upload-form-cancel');
var photo = document.querySelector('.filter-image-preview');
var filters = uploadOverlay.querySelectorAll('.upload-filter-controls input');
var setOfFilters = [
  'filter-none',
  'filter-chrome',
  'filter-sepia',
  'filter-marvin',
  'filter-phobos',
  'filter-heat'
];

var controlDec = document.querySelector('.upload-resize-controls-button-dec');
var controlInc = document.querySelector('.upload-resize-controls-button-inc');
var controlValue = document.querySelector('.upload-resize-controls-value');

var filterRemoveAdd = function (filter) {
  for (var i = 0; i < setOfFilters.length; i++) {
    photo.classList.remove(setOfFilters[i]);
  }
  photo.classList.add(setOfFilters[filter]);
};

var clickFilter = function (i) {
  filters[i].addEventListener('click', function () {
    filterRemoveAdd(i);
  });
};

// Open filter
if (uploadFile.required) {
  uploadOverlay.classList.remove('invisible');
}

// Close filter
uploadFormCancel.addEventListener('click', function () {
  uploadOverlay.classList.add('invisible');
});

// Select filter
for (var i = 0; i < filters.length; i++) {
  clickFilter(i);
}

// Change scale
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
    photo.style.transform = 'scale(' + (scale) + ')';
  });

  controlInc.addEventListener('click', function () {
    if (valueDefault < max) {
      valueDefault = (valueDefault + step);
    }
    controlValue.value = valueDefault + '%';
    if (scale < 1) {
      scale = scale + 0.25;
    }
    photo.style.transform = 'scale(' + (scale) + ')';
  });
}

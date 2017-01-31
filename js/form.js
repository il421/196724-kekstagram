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

// ЗАДАНИЕ 1
if (uploadFile.required) {
  uploadOverlay.classList.remove('invisible');
}

// ЗАДАНИЕ 2
uploadFormCancel.addEventListener('click', function () {
  uploadOverlay.classList.add('invisible');
});

// ЗАДАНИЕ 3
function filterRemoveAdd(filter) {
  for (var i = 0; i < setOfFilters.length; i++) {
    photo.classList.remove(setOfFilters[i]);
  }
  photo.classList.add(setOfFilters[filter]);
}

function clickFilter(i) {
  filters[i].addEventListener('click', function () {
    filterRemoveAdd(i);
  });
}

for (var i = 0; i < filters.length; i++) {
  clickFilter(i);
}

/*
filters[0].addEventListener('click', function () {
  filterRemoveAdd(0);
});

filters[1].addEventListener('click', function () {
  filterRemoveAdd(1);
});

filters[2].addEventListener('click', function () {
  filterRemoveAdd(2);
});

filters[3].addEventListener('click', function () {
  filterRemoveAdd(3);
});

filters[4].addEventListener('click', function () {
  filterRemoveAdd(4);
});

filters[5].addEventListener('click', function () {
  filterRemoveAdd(5);
});
*/

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

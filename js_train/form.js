'use strict';

var uploadSelectImage = document.querySelector('#upload-select-image');
var uploadFormCancel = document.querySelector('.upload-form-cancel');
var uploadOverlay = document.querySelector('.upload-overlay');
var filterImagePreview = document.querySelector('.filter-image-preview');
var listOfFilters = document.querySelectorAll('[name="upload-filter"]');

var decreasePreview = document.querySelector('.upload-resize-controls-button-dec');
var increasePreview = document.querySelector('.upload-resize-controls-button-inc');
var controlValue = document.querySelector('.upload-resize-controls-value');
var curentValue = 1;
var MIN_VALUE = 0.25;
var MAX_VALUE = 1;
var STEP_VALUE = 0.25;

// Open and Close Overlay
uploadSelectImage.addEventListener('click', function () {
  uploadOverlay.classList.remove('invisible');
});

uploadFormCancel.addEventListener('click', function () {
  uploadOverlay.classList.add('invisible');
});

// Changing Filters
for (var i = 0; i < listOfFilters.length; i++) {
  listOfFilters[i].addEventListener('click', function (evt) {
    filterImagePreview.className = evt.target.attributes[2].nodeValue.substring(7);
  })
}

// Changing scale
decreasePreview.addEventListener('click', function () {
    if (curentValue > MIN_VALUE) {
      curentValue = curentValue - STEP_VALUE;
      controlValue.value = curentValue * 100 + '%';
      filterImagePreview.style.transform = 'scale(' + curentValue + ')';
    }
});

increasePreview.addEventListener('click', function () {
    if (curentValue < MAX_VALUE) {
      curentValue = curentValue + STEP_VALUE;
      controlValue.value = curentValue * 100 + '%';
      filterImagePreview.style.transform = 'scale(' + curentValue + ')';
    }
});

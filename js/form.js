'use strict';

var uploadOverlay = document.querySelector('.upload-overlay');
var uploadFile = document.querySelector('.upload-input');
var uploadFormCancel = document.querySelector('.upload-form-cancel');
var filterImagePreview = document.querySelector('.filter-image-preview');
var filterChrome = document.querySelector('#upload-filter-chrome');
var controls = document.querySelectorAll('.upload-filter-controls input');


if (uploadFile.required) {
  uploadOverlay.classList.remove('invisible');
}

uploadFormCancel.addEventListener('click', function () {
  uploadOverlay.classList.add('invisible');
});

for (var i = 0; i < controls.length; i++) {
  controls[i].addEventListener('click', function () {
    filterImagePreview.classList.add('filter-chrome');
  });
}

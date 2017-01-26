'use strict';

var uploadOverlay = document.querySelector('.upload-overlay');
var uploadFile = document.querySelector('.upload-input');
var uploadFormCancel = document.querySelector('.upload-form-cancel');

if (uploadFile.required) {
  uploadOverlay.classList.remove('invisible');
}

uploadFormCancel.addEventListener('click', function () {
  uploadOverlay.classList.add('invisible');
});

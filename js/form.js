'use strict';

var uploadOverlay = document.querySelector('.upload-overlay');
var uploadFile = document.querySelector('#upload-file');
var uploadSelectImage = document.querySelector('#upload-select-image');

if (uploadFile.required) {
  uploadOverlay.classList.add('invisible');
}

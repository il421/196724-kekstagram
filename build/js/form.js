'use strict';
(function () {
  var uploadSelectImage = document.querySelector('#upload-select-image');
  var uploadFormOpen = document.querySelector('.upload-control');
  var uploadFormCancel = document.querySelector('.upload-form-cancel');
  window.uploadOverlay = document.querySelector('.upload-overlay');

  window.filterImagePreview = document.querySelector('.filter-image-preview');
  var filterControls = document.querySelector('.upload-filter-controls');
  var filterLevel = document.querySelector('.upload-filter-level');

  var controlValue = document.querySelector('.upload-resize-controls-value');
  var scaleElement = document.querySelector('.upload-resize-controls');
  var currentValue = 100;
  var STEP_VALUE = 25;

  var setupKeydownHendler = function (evt) {
    if (window.utils.isDisactiavateEvent(evt)) {
      window.uploadOverlay.classList.add('invisible');
      uploadSelectImage.setAttribute('aria-pressed', false);
      uploadFormCancel.setAttute('aria-pressed', true);
    }
  };
  var showSetupDialog = function () {
    window.uploadOverlay.classList.remove('invisible');
    uploadSelectImage.setAttribute('aria-pressed', true);
    uploadFormCancel.setAttribute('aria-pressed', false);
    addEventListener('keydown', setupKeydownHendler);
  };
  var hideSetupDialog = function () {
    window.uploadOverlay.classList.add('invisible');
    uploadSelectImage.setAttribute('aria-pressed', false);
    uploadFormCancel.setAttribute('aria-pressed', true);
    removeEventListener('keydown', setupKeydownHendler);
  };

  var applyFilter = function (evt) {
    evt.target.control.checked = true;
    window.filterImagePreview.className = evt.target['htmlFor'].substring(7);
    filterLevel.classList.remove('invisible');
  };

  var adjustScale = function (value) {
    controlValue.value = value + '%';
    window.filterImagePreview.style.transform = 'scale(' + value / 100 + ')';
  };


  // OPEN AND CLOSE OVERLAY
  window.enableSetup(uploadFormOpen, showSetupDialog);
  window.enableSetup(uploadFormCancel, hideSetupDialog);

  // CHANGING FILTERS
  window.initializeFilters(filterControls, applyFilter);

  // CHANGING SCALE
  window.initializeScale(scaleElement, currentValue, STEP_VALUE, adjustScale);

  // MOVE OVERLAY
  window.dragAndDrop();

  // SLIDE FILTERS
  window.slideFeaturePicture();
})()

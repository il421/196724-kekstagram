'use strict';


(function () {
  var MAX_VALUE_OF_SCALE = 100;
  var MIN_VALUE_OF_SCALE = 25;
  var STEP_OF_SCALE = 25;

  var uploadFile = document.querySelector('.upload-file');
  var uploadOverlay = document.querySelector('.upload-overlay');
  var uploadFormCancel = document.querySelector('.upload-form-cancel');
  var uploadFormSubmit = document.querySelector('.upload-form-submit');

  var photo = document.querySelector('.filter-image-preview');
  var controlValue = document.querySelector('.upload-resize-controls-value');
  var filterLevel = document.querySelector('.upload-filter-level');

  var valueOfDefault = 100;
  var scale = 1;

  var keydownHendler = function (evt) {
    if (evt.target !== document.querySelector('textarea') && window.utils.isDisactiavateEvent(evt)) {
      uploadOverlay.classList.add('invisible');
    }
  };

  var showSetupElement = function () {
    uploadOverlay.classList.remove('invisible');
    document.addEventListener('keydown', keydownHendler);
    uploadFile.setAttribute('aria-pressed', true);
    uploadFormCancel.setAttribute('aria-pressed', false);
  };
  var hideSetupElement = function (callback) {
    uploadOverlay.classList.add('invisible');
    document.removeEventListener('keydown', keydownHendler);
    uploadFile.setAttribute('aria-pressed', false);
    uploadFormCancel.setAttribute('aria-pressed', true);
    callback();
  };
  var submitElement = function () {
    uploadOverlay.classList.add('invisible');
    uploadFormCancel.setAttribute('aria-pressed', true);
    uploadFormCancel.setAttribute('aria-pressed', false);
  };

  // OPEN FILTER
  uploadFile.addEventListener('click', function () {
    showSetupElement();
  });

  uploadFile.addEventListener('keydown', function (evt) {
    if (window.utils.isActiavateEvent(evt)) {
      showSetupElement();
    }
  });

  // CLOSE FILTER AND FOCUS CALLBACK
  uploadFormCancel.addEventListener('click', function () {
    hideSetupElement();
  });

  uploadFormCancel.addEventListener('keydown', function (evt) {
    if (window.utils.isActiavateEvent(evt)) {
      hideSetupElement(function () {
        uploadFile.focus();
      });
    }
  });

  // SUBMIT FILTER
  uploadFormSubmit.addEventListener('click', function () {
    submitElement();
  });

  uploadFormSubmit.addEventListener('keydown', function (evt) {
    if (window.utils.isActiavateEvent(evt)) {
      submitElement();
    }
  });

  // CHANGE SCALE
  window.decreaseScale(function () {
    if (valueOfDefault > MIN_VALUE_OF_SCALE && scale > 0.25) {
      valueOfDefault = valueOfDefault - STEP_OF_SCALE;
      scale = scale - 0.25;
      controlValue.value = valueOfDefault + '%';
      photo.style.transform = 'scale(' + (scale) + ')';
    }
  });

  window.increaseScale(function () {
    if (valueOfDefault < MAX_VALUE_OF_SCALE && scale < 1) {
      valueOfDefault = valueOfDefault + STEP_OF_SCALE;
      scale = scale + 0.25;
      controlValue.value = valueOfDefault + '%';
      photo.style.transform = 'scale(' + (scale) + ')';
    }
  });

  // SELECT FILTER
  window.changeFilters(function (evt) {
    photo.className = 'filter-image-preview ' + evt.target['htmlFor'].substring(7);

    if (window.utils.isActiavateEvent(evt)) {
      photo.className = 'filter-image-preview ' + evt.target['htmlFor'].substring(7);
    }

    filterLevel.classList.remove(('invisible'));
  });
})();

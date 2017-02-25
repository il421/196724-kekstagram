'use strict';
var valueDefault = 100;
var scale = 1;

(function () {
  var uploadFile = document.querySelector('.upload-file');
  var uploadOverlay = document.querySelector('.upload-overlay');
  var uploadFormCancel = document.querySelector('.upload-form-cancel');
  var uploadFormSubmit = document.querySelector('.upload-form-submit');

  var photo = document.querySelector('.filter-image-preview');
  var controlValue = document.querySelector('.upload-resize-controls-value');

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
  var max = 100;
  var min = 25;
  var step = 25;

  window.decreaseScale(function () {
    if (valueDefault > min && scale > 0.25) {
      valueDefault = valueDefault - step;
      scale = scale - 0.25;
      controlValue.value = window.valueDefault + '%';
      photo.style.transform = 'scale(' + (window.scale) + ')';
    }
  });

  window.increaseScale(function () {
    if (valueDefault < max && scale < 1) {
      valueDefault = valueDefault + step;
      scale = scale + 0.25;
      controlValue.value = window.valueDefault + '%';
      photo.style.transform = 'scale(' + (window.scale) + ')';
    }
  });

  // SELECT FILTER
  window.changeFilters(function (evt) {
    photo.className = 'filter-image-preview ' + evt.target['htmlFor'].substring(7);

    if (window.utils.isActiavateEvent(evt)) {
      photo.className = 'filter-image-preview ' + evt.target['htmlFor'].substring(7);
    }
  });
})();

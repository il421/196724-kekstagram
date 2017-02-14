'use strict';

var uploadFile = document.querySelector('.upload-file');

(function () {
  var uploadOverlay = document.querySelector('.upload-overlay');
  var uploadFormCancel = document.querySelector('.upload-form-cancel');
  var uploadFormSubmit = document.querySelector('.upload-form-submit');

  var keydownHendler = function (evt) {
    if (evt.target !== document.querySelector('textarea') && window.utils.isDisactiavateEvent(evt)) {
      uploadOverlay.classList.add('invisible');
    }
  };

  var showSetupElement = function () {
    uploadOverlay.classList.remove('invisible');
    document.addEventListener('keydown', keydownHendler);
    window.uploadFile.setAttribute('aria-pressed', true);
    uploadFormCancel.setAttribute('aria-pressed', false);
  };
  var hideSetupElement = function (callback) {
    uploadOverlay.classList.add('invisible');
    document.removeEventListener('keydown', keydownHendler);
    window.uploadFile.setAttribute('aria-pressed', false);
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

  // CLOSE FILTER
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
})();

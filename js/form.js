'use strict';

var uploadOverlay = document.querySelector('.upload-overlay');
var uploadFile = document.querySelector('.upload-file');
var uploadFormCancel = document.querySelector('.upload-form-cancel');
var uploadFormSubmit = document.querySelector('.upload-form-submit');
var photo = document.querySelector('.filter-image-preview');
var filterControls = document.querySelector('.upload-filter-controls');
var setOfFilters = [
  'filter-none',
  'filter-chrome',
  'filter-sepia',
  'filter-marvin',
  'filter-phobos',
  'filter-heat'
];

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

var isActiavateEvent = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};
var isDisactiavateEvent = function (evt) {
  return evt.keyCode && evt.keyCode === ESCAPE_KEY_CODE;
};
var keydownHendler = function (evt) {
  if (evt.target !== document.querySelector('textarea') && isDisactiavateEvent(evt)) {
    uploadOverlay.classList.add('invisible');
  }
};
var showSetupElement = function () {
  uploadOverlay.classList.remove('invisible');
  document.addEventListener('keydown', keydownHendler);
  uploadFile.setAttribute('aria-pressed', true);
  uploadFormCancel.setAttribute('aria-pressed', false);
};
var hideSetupElement = function () {
  uploadOverlay.classList.add('invisible');
  document.removeEventListener('keydown', keydownHendler);
  uploadFile.setAttribute('aria-pressed', false);
  uploadFormCancel.setAttribute('aria-pressed', true);
};
var submitElement = function () {
  uploadOverlay.classList.add('invisible');
  uploadFormCancel.setAttribute('aria-pressed', true);
  uploadFormCancel.setAttribute('aria-pressed', false);
};

var controlDec = document.querySelector('.upload-resize-controls-button-dec');
var controlInc = document.querySelector('.upload-resize-controls-button-inc');
var controlValue = document.querySelector('.upload-resize-controls-value');

var removeAndAddFilter = function (evt) {
  if (evt.target.tagName !== 'label') {
    console.log(evt);
    for (var i = 0; i < setOfFilters.length; i++) {
      photo.classList.remove(setOfFilters[i]);
    }
    photo.classList.add('filter-' + evt.target['value']);
  }
};

// OPEN FILTER
uploadFile.addEventListener('click', function () {
  showSetupElement();
});

uploadFile.addEventListener('keydown', function (evt) {
  if (isActiavateEvent(evt)) {
    showSetupElement();
  }
});

// CLOSE FILTER
uploadFormCancel.addEventListener('click', function () {
  hideSetupElement();
});

uploadFormCancel.addEventListener('keydown', function (evt) {
  if (isActiavateEvent(evt)) {
    hideSetupElement();
  }
});

// SUBMIT FILTER
uploadFormSubmit.addEventListener('click', function () {
  submitElement();
});

uploadFormSubmit.addEventListener('keydown', function (evt) {
  if (isActiavateEvent(evt)) {
    submitElement(evt.target['value']);
  }
});

// SELECT FILTER
filterControls.addEventListener('change', removeAndAddFilter, false);

filterControls.addEventListener('keyup', function (evt) {

  if (isActiavateEvent(evt)) {
    removeAndAddFilter(evt);
  }
}, false);

// CHANGE SCALE
var max = 100;
var min = 25;
var step = 25;
var valueDefault = 100;
var scale = 1;

controlValue.value = '100%';
for (var i = 0; i < 1; i++) {
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

'use strict';

window.utils = (function () {
  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

  return {
    isActiavateEvent: function (evt) {
      return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
    },

    isDisactiavateEvent: function (evt) {
      return evt.keyCode && evt.keyCode === ESCAPE_KEY_CODE;
    },

    keydownHendler: function (evt) {
      if (evt.target !== document.querySelector('textarea') && window.utils.isDisactiavateEvent(evt)) {
        window.uploadOverlay.classList.add('invisible');
      }
    }
  };
})();

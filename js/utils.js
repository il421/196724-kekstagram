'use strict';

(function () {
  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

  window.utils = {
    isActiavateEvent: function (evt) {
      return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
    },

    isDisactiavateEvent: function (evt) {
      return evt.keyCode && evt.keyCode === ESCAPE_KEY_CODE;
    },

    getRandomElement: function (array) {
      var randomElementIndex = Math.floor(Math.random() * array.length);
      return array[randomElementIndex];
    },

    getRandomElementExcept: function (array, elem) {
      var newColor;
      while (!newColor || newColor === elem) {
        newColor = window.utils.getRandomElement(array);
        window.wizardCurrentColor = newColor;
      }
      return newColor;
    }
  };
})();

'use strict';

(function () {
  window.showGallery = function () {
    var openedGallary = document.querySelector('.gallery-overlay');
    var closeGallary = openedGallary.querySelector('.gallery-overlay-close');
    // var galeryImage = openedGallary.querySelector('.gallery-overlay-image');
    // var galeryLike = openedGallary.querySelector('.gallery-overlay-controls-like');
    // var galeryComment = openedGallary.querySelector('.gallery-overlay-controls-comments');

    // var keydownHendler = function (evt) {
    //   if (window.utils.isDisactiavateEvent(evt)) {
    //     openedGallary.classList.add('invisible');
    //   }
    // };

    var hideGalleryElement = function () {
      openedGallary.classList.add('invisible');
      // window.removeEventListener('keydown', keydownHendler);
    };

    openedGallary.classList.remove('invisible');

    closeGallary.addEventListener('click', function () {
      hideGalleryElement();
    });

    closeGallary.addEventListener('keydown', function (evt) {
      if (window.utils.isActiavateEvent(evt)) {
        hideGalleryElement();
      }
    });
  };
})();

'use strict';

(function () {
  window.showGallery = function (image) {
    var openedGallery = document.querySelector('.gallery-overlay');
    var closeGallery = openedGallery.querySelector('.gallery-overlay-close');
    var galleryImage = openedGallery.querySelector('.gallery-overlay-image');
    // var galleryLike = openedGallary.querySelector('.gallery-overlay-controls-like');
    // var galleryComment = openedGallary.querySelector('.gallery-overlay-controls-comments');

    var keydownHendler = function (evt) {
      if (window.utils.isDisactiavateEvent(evt)) {
        openedGallery.classList.add('invisible');
      }
    };
    var hideGalleryElement = function () {
      openedGallery.classList.add('invisible');
      window.removeEventListener('keydown', keydownHendler);
    };

    // OPEN GALLERY
    openedGallery.classList.remove('invisible');
    document.addEventListener('keydown', keydownHendler);
    event.preventDefault();

    // CLOSE GALLERY
    closeGallery.addEventListener('click', function () {
      hideGalleryElement();
    });

    closeGallery.addEventListener('keydown', function (evt) {
      if (window.utils.isActiavateEvent(evt)) {
        hideGalleryElement();
      }
    });

    galleryImage.setAttribute('src', image);
  };
})();

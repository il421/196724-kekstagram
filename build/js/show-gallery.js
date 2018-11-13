'use strict';

(function () {
  window.showGallery = function (image, comment, like) {
    var galleryOverlay = document.querySelector('.gallery-overlay');
    var galleryOverlayClose = galleryOverlay.querySelector('.gallery-overlay-close');
    var galleryImage = galleryOverlay.querySelector('.gallery-overlay-image');
    var galleryLike = galleryOverlay.querySelector('.likes-count');
    var galleryComment = galleryOverlay.querySelector('.gallery-overlay-comments');

    var keydownHandler = function (evt) {
      if (window.utils.isDisactiavateEvent(evt)) {
        galleryOverlay.classList.add('invisible');
      }
    };
    var hideGalleryOverlay = function () {
      galleryOverlay.classList.add('invisible');
      removeEventListener('keydown', keydownHandler);
    };

    // OPEN GALLERY
    galleryOverlay.classList.remove('invisible');
    event.preventDefault();
    addEventListener('keydown', keydownHandler);

    // FILL IN GALLERY
    galleryImage.setAttribute('src', image);
    galleryLike.textContent = like;
    galleryComment.textContent = comment;

    // CLOSE GALLERY
    galleryOverlayClose.addEventListener('click', hideGalleryOverlay);
  }
})()

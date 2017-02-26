'use strict';

(function () {
  var openedGallery = document.querySelector('.gallery-overlay');
  var closeGallery = openedGallery.querySelector('.gallery-overlay-close');
  var galleryImage = openedGallery.querySelector('.gallery-overlay-image');
  var galleryLike = openedGallery.querySelector('.likes-count');
  var galleryComment = openedGallery.querySelector('.comments-count');

  window.showGallery = function (image, comment, like) {
    var keydownHandler = function (evt) {
      if (window.utils.isDisactiavateEvent(evt)) {
        openedGallery.classList.add('invisible');
      }
    };
    var hideGalleryElement = function () {
      openedGallery.classList.add('invisible');
      window.removeEventListener('keydown', keydownHandler);
    };

    // OPEN GALLERY
    openedGallery.classList.remove('invisible');
    document.addEventListener('keydown', keydownHandler);
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

    // FILL IN DIALOG
    galleryImage.setAttribute('src', image);
    galleryLike.textContent = like;
    galleryComment.textContent = comment;
  };
})();

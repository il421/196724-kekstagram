'use strict';
(function () {
  var pictureTemplate = document.querySelector('#picture-template');
  var pictureTemplateToClone = pictureTemplate.content.querySelector('.picture');
  var galleryOfPictures = document.querySelector('.pictures');

// OPEN DIALOG
  galleryOfPictures.addEventListener('click', function (evt) {
    var nextSibling = evt.target.nextElementSibling;
    window.showGallery((evt.target.attributes['0'].value), (nextSibling.firstElementChild.innerText), (nextSibling.lastElementChild.innerText));
  });

  galleryOfPictures.addEventListener('keydown', function (evt) {
    if (window.utils.isActiavateEvent(evt)) {
      var evtTarget = evt.target.childNodes;
      var evtTargetThird = evtTarget[3];
      window.showGallery((evtTarget[1].attributes['0'].value), (evtTargetThird.firstElementChild.innerText), (evtTargetThird.lastElementChild.innerText));
    }
  });

  window.load(function (evt) {
    var QUANTITY_OF_NEW_PICTURES = 10;
    var UTILITY_OF_RANDOM = 0.5;

    var data = JSON.parse(evt.target.response);

  // LOAD PICTURES
    data.forEach(function () {
      galleryOfPictures.appendChild(pictureTemplateToClone.cloneNode(true));
    });

    var filtersOfPictures = document.querySelector('.filters');
    var filterDiscussed = document.querySelector('#filter-discussed');
    var filterPopular = document.querySelector('#filter-popular');
    var filterNew = document.querySelector('#filter-new');

    var renderItem = function (arr) {
      var imageCreated = document.querySelectorAll('.picture img');
      var commentsCreated = document.querySelectorAll('.picture-comments');
      var likesCreated = document.querySelectorAll('.picture-likes');

      for (var i = 0; i < imageCreated.length; i++) {
        var arrayData = arr[i];
        imageCreated[i].setAttribute('src', arrayData.url);
        commentsCreated[i].textContent = arrayData.comments.length;
        likesCreated[i].textContent = arrayData.likes;
      }
    };

    var dataDiscussed = data.concat().sort(function (imageA, imageB) {
      return imageB.comments.length - imageA.comments.length;
    });

    var dataNew = data.concat().sort(function (imageA, imageB) {
      return Math.random() - UTILITY_OF_RANDOM;
    });

  // SHOW PICTURES AND FILTERS
    filtersOfPictures.classList.remove('hidden');
    renderItem(data);

  // FILTER POPULAR
    filterPopular.addEventListener('click', function () {
      while (galleryOfPictures.lastChild) {
        galleryOfPictures.removeChild(galleryOfPictures.lastChild);
      }

      data.forEach(function () {
        galleryOfPictures.appendChild(pictureTemplateToClone.cloneNode(true));
      });
      renderItem(data);
    });

  // FILTER NEW
    filterNew.addEventListener('click', function () {
      while (galleryOfPictures.lastChild) {
        galleryOfPictures.removeChild(galleryOfPictures.lastChild);
      }

      for (var i = 0; i < QUANTITY_OF_NEW_PICTURES; i++) {
        galleryOfPictures.appendChild(pictureTemplateToClone.cloneNode(true));
      }
      renderItem(dataNew);
    });

  // FILTER DISCUSSED
    filterDiscussed.addEventListener('click', function () {
      while (galleryOfPictures.lastChild) {
        galleryOfPictures.removeChild(galleryOfPictures.lastChild);
      }

      data.forEach(function () {
        galleryOfPictures.appendChild(pictureTemplateToClone.cloneNode(true));
      });
      renderItem(dataDiscussed);
    });
  });
})();

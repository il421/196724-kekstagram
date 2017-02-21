'use strict';
var pictureTemplate = document.querySelector('#picture-template');
var pictureTemplateToClone = pictureTemplate.content.querySelector('.picture');
var galleryOfPictures = document.querySelector('.pictures');

// OPEN DIALOG
(function () {
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
})();

// LOAD PICTURES
window.load(function (evt) {
  var data = JSON.parse(evt.target.response);

  data.forEach(function () {
    galleryOfPictures.appendChild(pictureTemplateToClone.cloneNode(true));
  });

  var imageCreated = document.querySelectorAll('.picture img');
  var commentsCreated = document.querySelectorAll('.picture-comments');
  var likesCreated = document.querySelectorAll('.picture-likes');

  var filterDiscussed = document.querySelector('#filter-discussed');
  var filterPopular = document.querySelector('#filter-popular');
  var filterNew = document.querySelector('#filter-new');

  var renderItem = function (i, arr) {
    imageCreated[i].setAttribute('src', arr[i].url);
    commentsCreated[i].textContent = arr[i].comments.length;
    likesCreated[i].textContent = arr[i].likes;
  };

  var picturesDiscussed = function (imageA, imageB) {
    return imageB.comments.length - imageA.comments.length;
  };

  var picturesNew = function () {

  };

  for (var i = 0; i < data.length; i++) {
    renderItem(i, data);
  }

  filterPopular.addEventListener('click', function () {
    for (i = 0; i < data.length; i++) {
      renderItem(i, data);
    }
  });

  filterNew.addEventListener('click', function () {
    for (i = 0; i < data.length; i++) {
      var dataNew = data.map(picturesNew);
      renderItem(i, dataNew);
    }
  });

  filterDiscussed.addEventListener('click', function () {
    for (i = 0; i < data.length; i++) {
      var dataDiscussed = data.concat().sort(picturesDiscussed);
      renderItem(i, dataDiscussed);
    }
  });

  // SHOW FILTERS
  var filtersOfPictures = document.querySelector('.filters');
  filtersOfPictures.classList.remove('hidden');
});


//
// for (i = 0; i < 16; i++) {
//   var randomElementIndex = Math.floor(Math.random() * picturesInGallery.length);
//   galleryOfPictures.removeChild(picturesInGallery[randomElementIndex]);
// }

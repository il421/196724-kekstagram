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

window.load(function (evt) {
  var data = JSON.parse(evt.target.response);

// LOAD PICTURES
  data.forEach(function () {
    galleryOfPictures.appendChild(pictureTemplateToClone.cloneNode(true));
  });

  var imageCreated = document.querySelectorAll('.picture img');
  var commentsCreated = document.querySelectorAll('.picture-comments');
  var likesCreated = document.querySelectorAll('.picture-likes');

  var filtersOfPictures = document.querySelector('.filters');
  var filterDiscussed = document.querySelector('#filter-discussed');
  var filterPopular = document.querySelector('#filter-popular');
  var filterNew = document.querySelector('#filter-new');

  var renderItem = function (i, arr) {
    imageCreated[i].setAttribute('src', arr[i].url);
    commentsCreated[i].textContent = arr[i].comments.length;
    likesCreated[i].textContent = arr[i].likes;
  };

  var picturesDiscussed = data.concat().sort(function (imageA, imageB) {
    return imageB.comments.length - imageA.comments.length;
  });

  var picturesNew = data.map(function () {

  });

  for (var i = 0; i < data.length; i++) {
    renderItem(i, data);
  }

// SHOW FILTERS
  filtersOfPictures.classList.remove('hidden');

// FILTER POPULAR
  filterPopular.addEventListener('click', function () {
    for (i = 0; i < data.length; i++) {
      renderItem(i, data);
    }
  });

// FILTER NEW
  filterNew.addEventListener('click', function () {
    for (i = 0; i < data.length; i++) {
      var dataNew = data.map(picturesNew);
      renderItem(i, dataNew);
    }
  });

// FILTER DISCUSSED
  filterDiscussed.addEventListener('click', function () {
    for (i = 0; i < data.length; i++) {
      renderItem(i, picturesDiscussed);
    }
  });
});

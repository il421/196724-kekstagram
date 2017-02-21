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

  var renderItem = function (i) {
    var dataArr = data[i];
    imageCreated[i].setAttribute('src', dataArr.url);
    commentsCreated[i].textContent = dataArr.comments.length;
    likesCreated[i].textContent = dataArr.likes;
  };

  for (var i = 0; i < data.length; i++) {
    renderItem(i);
  }

  // SORT AND FILTERS
  var filtersOfPictures = document.querySelector('.filters');
  // var filterPopular = document.querySelector('#filter-popular');
  // var filterNew = document.querySelector('#filter-new');
  var filterDiscussed = document.querySelector('#filter-discussed');
  var picturesInGallery = document.querySelectorAll('.picture');

  filtersOfPictures.classList.remove('hidden');

  var sortPicturesPipular = picturesInGallery.sort(function (left, right) {
    return (picturesInGallery['left'].lastElementChild.firstElementChild.innerText) - (picturesInGallery['right'].lastElementChild.firstElementChild.innerText);
  });

  filterDiscussed.addEventListener('click', function () {
    picturesInGallery.forEach(sortPicturesPipular);
  });
});

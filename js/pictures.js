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

  var imageCreated = galleryOfPictures.querySelectorAll('.picture img');
  var commentsCreated = galleryOfPictures.querySelectorAll('.picture-comments');
  var likesCreated = galleryOfPictures.querySelectorAll('.picture-likes');

  var filtersOfPictures = document.querySelector('.filters');

  var renderItem = function (i) {
    var dataArr = data[i];
    imageCreated[i].setAttribute('src', dataArr.url);
    commentsCreated[i].textContent = dataArr.comments.length;
    likesCreated[i].textContent = dataArr.likes;
  };

  for (var i = 0; i < data.length; i++) {
    renderItem(i);
  }

  filtersOfPictures.classList.remove('hidden');
});

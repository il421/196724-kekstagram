'use strict';
var pictureTemplate = document.querySelector('#picture-template');
var pictureTemplateToClone = pictureTemplate.content.querySelector('.picture');
var galleryOfPictures = document.querySelector('.pictures');

// LOAD PICTURES
window.load(function (evt) {
  var data = JSON.parse(evt.target.response);

  data.forEach(function () {
    galleryOfPictures.appendChild(pictureTemplateToClone.cloneNode(true));
  });

  var imageCreated = galleryOfPictures.querySelectorAll('.picture img');
  var commentsCreated = galleryOfPictures.querySelectorAll('.picture-comments');
  var likesCreated = galleryOfPictures.querySelectorAll('.picture-likes');

  var renderItem = function (i) {
    var dataArr = data[i];
    imageCreated[i].setAttribute('src', dataArr.url);
    commentsCreated[i].textContent = dataArr.comments;
    likesCreated[i].textContent = dataArr.likes;
  };

  for (var i = 0; i < data.length; i++) {
    renderItem(i);
  }
});

// OPEN DIALOG
(function () {
  galleryOfPictures.addEventListener('click', function (evt) {
    window.showGallery((evt.target.attributes['0'].value), (evt.target.nextElementSibling.firstElementChild.innerText), (evt.target.nextElementSibling.lastElementChild.innerText));
  });

  galleryOfPictures.addEventListener('keydown', function (evt) {
    if (window.utils.isActiavateEvent(evt)) {
      var evtTarget = evt.target.childNodes;
      window.showGallery((evtTarget[1].attributes['0'].value), (evtTarget[3].firstElementChild.innerText), (evtTarget[3].lastElementChild.innerText));
    }
  });
})();

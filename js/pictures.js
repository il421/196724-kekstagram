'use strict';
var pictureTemplate = document.querySelector('#picture-template');
var pictureTemplateToClone = pictureTemplate.content.querySelector('.picture');
var galleryOfPictures = document.querySelector('.pictures');

window.load(function (evt) {
  var data = JSON.parse(evt.target.response);

  data.forEach(function () {
    galleryOfPictures.appendChild(pictureTemplateToClone.cloneNode(true));
  });

  var imageCreated = galleryOfPictures.querySelectorAll('.picture img');
  var commentsCreated = galleryOfPictures.querySelectorAll('.picture-comments');
  var likesCreated = galleryOfPictures.querySelectorAll('.picture-likes');

  var renderItem = function (i) {
    imageCreated[i].setAttribute('src', data[i].url);
    commentsCreated[i].textContent = data[i].comments;
    likesCreated[i].textContent = data[i].likes;
  };

  for (var i = 0; i < data.length; i++) {
    renderItem(i);
  }
});

(function () {
  galleryOfPictures.addEventListener('click', function (evt) {
    window.showGallery(evt.target);
  });
})();

'use strict';
var pictureTemplate = document.querySelector('#picture-template');
var pictureTemplateToClone = pictureTemplate.content.querySelector('.picture');
var galleryOfPictures = document.querySelector('.pictures');

window.load(function (evt) {
  var data = JSON.parse(evt.target.response);

  data.forEach(function () {
    galleryOfPictures.appendChild(pictureTemplateToClone.cloneNode(true));
  });

  var imageTemplate = document.querySelectorAll('.picture img');
  var commentsTemplate = document.querySelectorAll('.picture-comments');
  var likesTemplate = document.querySelectorAll('.picture-likes');

  var renderItem = function (i) {
    imageTemplate[i].setAttribute('src', data[i].url);
    commentsTemplate[i].textContent = data[i].comments;
    likesTemplate[i].textContent = data[i].likes;
  };

  for (var i = 0; i < data.length; i++) {
    renderItem(i);
  }

  galleryOfPictures.addEventListener('click', function (event) {
    event.preventDefault();
    window.showGallery();
  });
});

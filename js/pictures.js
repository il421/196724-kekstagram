'use strict';
(function () {
  var MY_DATA = '../data.json';
  var NUMBER_OF_CUTTING_ELEMENTS = 15;
  var pictures = [];

  var pictureTemplate = document.querySelector('#picture-template');
  var pictureTemplateToClone = pictureTemplate.content.querySelector('.picture');
  var pictureContainer = document.querySelector('.pictures');

  var filterPopular = document.querySelector('#filter-popular');
  var filterNew = document.querySelector('#filter-new');
  var filterDiscussed = document.querySelector('#filter-discussed');

  window.load(MY_DATA, function (evt) {
    //LOAD DATA
    pictures = JSON.parse(evt.target.response);

    //RENDER ELEMENTS
    var renderPictures = function (arr) {
      var pictureImage = document.querySelectorAll('.picture img');
      var pictureComments = document.querySelectorAll('.picture-comments');
      var pictureLikes = document.querySelectorAll('.picture-likes');
      var pictureFilters = document.querySelector('.filters');

      for (var i = 0; i < arr.length; i++) {
        pictureImage[i].setAttribute('src', arr[i].url);
        pictureComments[i].textContent = arr[i].comments;
        pictureLikes[i].textContent = arr[i].likes;
        pictureFilters.classList.remove('hidden');
      }
    };

    //MAKE ELEMENTS
    var makeElements = function (arr, filter) {
      // var fragment = document.createDocumentFragment(); //Log in the function to load all together
      while (pictureContainer.lastChild) {
        pictureContainer.removeChild(pictureContainer.lastChild);
      } //Clean container
      arr.forEach(function() {
        pictureContainer.appendChild(pictureTemplateToClone.cloneNode(true));
      });
      renderPictures(filter); //Render container
    };

    //FILTERS
    var picturesPopular = pictures.concat().sort(function (a, b) {
      return b.likes - a.likes;
    });

    var picturesDisscussed = pictures.concat().sort(function (a, b) {
      return b.comments.length - a.comments.length;
    });

    var cutNewPictures = function () {
      var newPictures = pictures.slice();
      for (var i = 0; i < NUMBER_OF_CUTTING_ELEMENTS; i++) {
        newPictures.splice(window.utils.getRandomNumber(newPictures) , 1)
      }
      return newPictures;
    };

    var picturesNew = cutNewPictures();


    //OPEN AND RANDER OVERLAY
    pictureContainer.addEventListener('click', function(evt) {
      var targetNextSibling = evt.target.nextElementSibling;
      window.showGallery((evt.target.attributes['0'].value), (targetNextSibling.firstElementChild.innerText), (targetNextSibling.lastElementChild.innerText))
    }, true);

    pictureContainer.addEventListener('keydown', function(evt) {
      if (window.utils.isActiavateEvent(evt)) {
        var targetChildren = evt.target.children[1];
        window.showGallery((evt.target.childNodes[1].attributes['0'].value), (targetChildren.children['0'].innerText), (targetChildren.children['1'].innerText))
      }
    });

    //FILTER PICTURES
    makeElements(pictures, picturesPopular);

    window.enableSetup(filterPopular, function () {
      makeElements(pictures, picturesPopular);
    });
    window.enableSetup(filterDiscussed, function () {
      makeElements(pictures, picturesDisscussed);
    });
    window.enableSetup(filterNew, function () {
      makeElements(picturesNew, picturesNew);
    });
  })
})()

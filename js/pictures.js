var photoLinks = ['photos/1.jpg','photos/2.jpg','photos/3.jpg','photos/4.jpg','photos/5.jpg','photos/6.jpg','photos/7.jpg','photos/8.jpg','photos/9.jpg','photos/10.jpg','photos/11.jpg','photos/12.jpg','photos/13.jpg','photos/14.jpg','photos/15.jpg','photos/16.jpg','photos/17.jpg','photos/18.jpg','photos/19.jpg','photos/20.jpg','photos/21.jpg','photos/22.jpg','photos/23.jpg','photos/24.jpg', 'photos/25.jpg']
var photoLikes = [];
var photoComments = ['Всё отлично!',
'В целом всё неплохо. Но не всё',
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это непрофессионально',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше',
'Лица у людей на фотке перекошены, как будто их избивают.  Как вообще можно было поймать такой неудачный момент?!'];
  var photos = [];

for (var i = 0; i < 25; i++) {
  photoLikes[i]= randomInteger(15,200)
}

for (var i = 0; i < 25; i++) {
  var photoDescription = {};
  photoDescription[i] = {
    'url':  photoLinks[randomNumber(photoLinks)],
    'likes': photoLikes[randomNumber(photoLikes)],
    'comments': photoComments[randomNumber(photoComments)]
  };
  photos[i] = photoDescription;
}

for (var i = 0; i < 19; i++) {
  var pictureTemplate = document.querySelector('#picture-template');
  var randomPhoto = randomNumber(photos);
  pictureTemplate.content.querySelector('.picture-comments').innerHTML = photos[randomPhoto][randomPhoto].comments;
  pictureTemplate.content.querySelector('.picture-likes').innerHTML = photos[randomPhoto][randomPhoto].likes;
  pictureTemplate.content.querySelector('img').src = photos[randomPhoto][randomPhoto].url;
  var picturesContainer = document.querySelector('.pictures');
  picturesContainer.appendChild(pictureTemplate.content.cloneNode(true));
}

var  galleryOverlay = document.querySelector('.gallery-overlay');
var galleryOverlayImg = document.querySelector('.gallery-overlay-image');
var galleryOverlayLikes = document.querySelector('.gallery-overlay .likes-count');
var galleryOverlayComments = document.querySelector('.gallery-overlay .comments-count');


 var galleryOverlayCloser = galleryOverlay.querySelector('.gallery-overlay-close');
 var ESC_KEYCODE = 27;
 var ENTER_KEYCODE = 13;
 var openOverlay = function () {
     galleryOverlay.classList.remove('hidden');
     document.addEventListener('keydown', function(evt) {
       if (evt.keyCode === ESC_KEYCODE) {
         closeOverlay();
       }
     });
 };
 var closeOverlay = function () {
     galleryOverlay.classList.add('hidden');
 };

 picturesContainer.addEventListener('click', setupPictureDescriprion);

 picturesContainer.addEventListener('keydown', function(evt) {
   if (evt.keyCode === ENTER_KEYCODE) {
     setupPictureDescriprionByKey(event);
   }});

 function setupPictureDescriprion(event) {
   event.preventDefault();
   var target = event.target;
       var photoStats = target.nextSibling.nextElementSibling;
       var photoComment = photoStats.firstElementChild.innerHTML;
       var photoLike = photoStats.lastElementChild.innerHTML;
       galleryOverlayImg.src = target.src;
       galleryOverlayLikes.innerHTML = photoLike;
       galleryOverlayComments.innerHTML = photoComment;
       console.log(photoStats);
       console.log(photoComment);
       console.log(target.src);
      openOverlay();
 }
  function setupPictureDescriprionByKey() {
    event.preventDefault();
    var target = event.target;
        var photoStats = target.lastElementChild;
        var photoComment = photoStats.firstElementChild.innerHTML;
        var photoLike = photoStats.lastElementChild.innerHTML;
        var choosenImg =  target.firstElementChild;
        galleryOverlayImg.src = choosenImg.src;
        galleryOverlayLikes.innerHTML = photoLike;
        galleryOverlayComments.innerHTML = photoComment;
        console.log(photoStats);
        console.log(photoComment);
        console.log(target.src);
       openOverlay();
  }


  galleryOverlayCloser.addEventListener('click', closeOverlay);
  galleryOverlayCloser.addEventListener('keydown', function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closeOverlay();
    }
  });

  var uploadInput = document.querySelector('#upload-file');
  var uploadOverlay = document.querySelector('.upload-overlay');
  var uploadOverlayCloser = document.querySelector('.upload-form-cancel');
  var uploadEffectsForm = document.querySelector('.upload-effect-controls');
  var closeUploadOverlay = function () {
      uploadOverlay.classList.add('hidden');
  };
  var changePhotoEffect = function() {
    var target = event.target;
    var photoEffect = target.parentNode.previousElementSibling.id;
    var setPhotoEffect = document.querySelector('.upload-form-preview img');
    setPhotoEffect.setAttribute('class', photoEffect)
    console.log(target);
    console.log(photoEffect);
  }

  uploadInput.addEventListener('change', function() {
    uploadOverlay.classList.remove('hidden');
    document.addEventListener('keydown', function(evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        closeUploadOverlay();
      }
    });
  });

  uploadOverlayCloser.addEventListener('click', closeUploadOverlay);

  uploadOverlayCloser.addEventListener('keydown', function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closeUploadOverlay();
    };
  });
  uploadEffectsForm.addEventListener('click', changePhotoEffect)

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }
  function randomNumber(array) {
  return Math.floor(Math.random()*array.length);
}

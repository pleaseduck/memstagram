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

for (var i = 0; i < 11; i++) {
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

galleryOverlay.classList.remove('hidden');
galleryOverlayImg.src = photos[1][1].url;
galleryOverlayLikes.innerHTML = photos[1][1].likes;
galleryOverlayComments.innerHTML = randomInteger(5, 228);


function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }
  function randomNumber(array) {
  return Math.floor(Math.random()*array.length);
}
/*
for (var i = 0; i < 4; i++) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template');
  similarWizardTemplate.content.querySelector('.setup-similar-label').innerHTML =  wizardСharacteristics.name[randomNumber(wizardСharacteristics.name)] +
  wizardСharacteristics.surname[randomNumber(wizardСharacteristics.surname)];
  similarWizardTemplate.content.querySelector('.wizard-coat').style.fill = wizardСharacteristics.coat[randomNumber(wizardСharacteristics.coat)];
  similarWizardTemplate.content.querySelector('.wizard-eyes').style.fill = wizardСharacteristics.eyesColor[randomNumber(wizardСharacteristics.eyesColor)];

  wizardsList.appendChild(similarWizardTemplate.content.cloneNode(true));
  console.log(similarWizardTemplate.content.querySelector('.setup-similar-label'))
}
*/

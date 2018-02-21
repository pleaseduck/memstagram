(function() {
  var uploadInput = document.querySelector('#upload-file');
  var uploadOverlay = document.querySelector('.upload-overlay');
  var uploadOverlayCloser = document.querySelector('.upload-form-cancel');
  var uploadEffectsForm = document.querySelector('.upload-effect-controls');
  var setPhotoEffect = document.querySelector('.upload-form-preview img');

  var closeUploadOverlay = function () {
      uploadOverlay.classList.add('hidden');
  };
  var changePhotoEffect = function() {
    var target = event.target;
    var photoEffectInputs = document.querySelectorAll('.upload-effect-controls input');
    if (target.parentNode.previousElementSibling.tagName.toLowerCase() === 'input') {
      var photoEffect = target.parentNode.previousElementSibling.id;
      for (var i = 0; i < photoEffectInputs.length; i++) {
        photoEffectInputs[i].removeAttribute('checked');
      }
      target.parentNode.previousElementSibling.setAttribute('checked', true);
      setPhotoEffect.style.filter = '';
      setPhotoEffect.setAttribute('class', photoEffect);

  };
};

  uploadInput.addEventListener('change', function() {
    uploadOverlay.classList.remove('hidden');
    document.addEventListener('keydown', function(evt) {
      window.util.isEscEvent(event, closeUploadOverlay);
    });
  });

  uploadOverlayCloser.addEventListener('click', closeUploadOverlay);

  uploadOverlayCloser.addEventListener('keydown', function(evt) {
      window.util.isEnterEvent(event, closeUploadOverlay);
  });

  var sliderBlock = document.querySelector('.upload-effect-level');
  uploadEffectsForm.addEventListener('click', function(evt) {
    var clickTarget = evt.target;
    if(clickTarget.parentNode.previousElementSibling.id !== 'effect-none') {
      sliderBlock.classList.remove('hidden');
    } else {
        sliderBlock.classList.add('hidden');
    }
    changePhotoEffect();
  });

  var decreaseBtn = document.querySelector('.upload-resize-controls-button-dec');
  var increaseBtn = document.querySelector('.upload-resize-controls-button-inc');
  var sizeControlInput = document.querySelector('.upload-resize-controls-value');
  var previewPhoto = document.querySelector('.effect-image-preview');
  var decreaseValue = function () {
    if (sizeControlInput.value == '100%') {
      sizeControlInput.value = '75%';
      previewPhoto.style.transform = 'scale(0.75)';
    } else if (sizeControlInput.value == '75%') {
        sizeControlInput.value = '50%';
        previewPhoto.style.transform = 'scale(0.5)';
    } else if (sizeControlInput.value = '50%') {
        sizeControlInput.value = '25%';
        previewPhoto.style.transform = 'scale(0.25)';
    };
  }
  var increaseValue = function () {
    if (sizeControlInput.value == '25%') {
      sizeControlInput.value = '50%';
      previewPhoto.style.transform = 'scale(0.5)';
    } else if (sizeControlInput.value == '50%') {
        sizeControlInput.value = '75%';
        previewPhoto.style.transform = 'scale(0.75)';
    } else if (sizeControlInput.value = '75%') {
        sizeControlInput.value = '100%';
        previewPhoto.style.transform = 'scale(1)';
    };
  }
  decreaseBtn.addEventListener('click', decreaseValue);
  increaseBtn.addEventListener('click', increaseValue);

  var sliderElem = document.querySelector('.upload-effect-level-line');
  var thumbElem = sliderElem.children[0];

  thumbElem.onmousedown = function(e) {
    var thumbCoords = getCoords(thumbElem);
    var shiftX = e.pageX - thumbCoords.left;
    var sliderVal = document.querySelector('.upload-effect-level-val');
    var sliderWidth = sliderElem.clientWidth;

    // shiftY здесь не нужен, слайдер двигается только по горизонтали

    var sliderCoords = getCoords(sliderElem);

    document.onmousemove = function(e) {
      //  вычесть координату родителя, т.к. position: relative
      var newLeft = e.pageX - shiftX - sliderCoords.left;

      // курсор ушёл вне слайдера
      if (newLeft < 0) {
        newLeft = 0;
      }
      var rightEdge = sliderElem.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      thumbElem.style.left = newLeft + 'px';
      sliderVal.style.width = newLeft + 'px';

      if(setPhotoEffect.classList.contains('effect-chrome')) {
        setPhotoEffect.style.filter = 'grayscale(' + parseInt(sliderVal.style.width) / parseInt(sliderWidth) + ')';
      } else if(setPhotoEffect.classList.contains('effect-sepia')) {
        setPhotoEffect.style.filter = 'sepia(' + parseInt(sliderVal.style.width) / parseInt(sliderWidth) + ')';
        console.log(setPhotoEffect.style.filter);
      }else if(setPhotoEffect.classList.contains('effect-marvin')) {
          setPhotoEffect.style.filter = 'invert(' + (parseInt(sliderVal.style.width) / parseInt(sliderWidth))*100 + '%)';
      } else if(setPhotoEffect.classList.contains('effect-phobos')) {
        setPhotoEffect.style.filter = 'blur(' + (parseInt(sliderVal.style.width) / parseInt(sliderWidth))*5 + 'px)';
      }else if(setPhotoEffect.classList.contains('effect-heat')) {
        setPhotoEffect.style.filter = 'brightness(' + (parseInt(sliderVal.style.width) / parseInt(sliderWidth))*3 + ')';
      }

    };

    var choozenFilter =  document.querySelector('.effect-chrome');
    console.log(choozenFilter);
    document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
    };

    return false; // disable selection start (cursor change)

  };



  function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };

  }
})();

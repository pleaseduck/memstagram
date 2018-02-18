(function() {
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
      window.util.isEscEvent(event, closeUploadOverlay);
    });
  });

  uploadOverlayCloser.addEventListener('click', closeUploadOverlay);

  uploadOverlayCloser.addEventListener('keydown', function(evt) {
      window.util.isEnterEvent(event, closeUploadOverlay);
  });


  uploadEffectsForm.addEventListener('click', changePhotoEffect)

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

})();

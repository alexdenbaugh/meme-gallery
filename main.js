var gallery = document.querySelector('main');
var imageUrls = [];
var imageURLInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function() {
  if (imageURLInput.value != '') {
  console.log(imageURLInput.value);
  imageUrls.push(imageURLInput.value);
  imageURLInput.value = '';
  updateGallery();
  } else {
    console.log('this is not a valid URL');
  }
});

function updateGallery() {
  gallery.innerHTML = "";
  for (var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();

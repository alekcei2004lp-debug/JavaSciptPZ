const thumbs = document.querySelectorAll('.thumb');
const mainImage = document.querySelector('.main-image');

thumbs.forEach(function (thumb) {
  thumb.addEventListener('click', function () {
    mainImage.src = thumb.src;
  });
});
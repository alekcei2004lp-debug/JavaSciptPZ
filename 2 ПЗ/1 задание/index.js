const thumbs = document.querySelector('.thumbs');
const mainImage = document.querySelector('.main-image');

thumbs.addEventListener('click', (event) => {
  const thumb = event.target.closest('.thumb');

  if (thumb) {
    mainImage.src = thumb.src;
  }
});

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const renderGalleryListItem = (img) => img.reduce((acc,{preview, original, description}) => acc +`<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`, '');

const incertListItem = (string) => {
    galleryList.insertAdjacentHTML('beforeend', string);
};

const result = renderGalleryListItem(galleryItems);
incertListItem(result);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});

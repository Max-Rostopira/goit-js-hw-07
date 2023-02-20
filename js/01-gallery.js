import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector('.gallery');
const renderGalleryListItem = (img) => img.reduce((acc,{preview, original, description}) => acc +`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`, '');

const incertListItem = (string) => {
galleryList.insertAdjacentHTML('beforeend', string);
};

const result = renderGalleryListItem(galleryItems);
incertListItem(result);

let handleImgClick = (event) => {
    event.preventDefault();

    const { target } = event
    const origin = target.dataset.source;
    
    if (target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
<img src="${origin}" width="800" height="600">`);
    instance.show();

    
    let handleCloseImg = (event) => {
        if (event.code === 'Escape')
          instance.close();
      galleryList.removeEventListener('keydown', handleCloseImg);
 }
    galleryList.addEventListener('keydown', handleCloseImg);
}

galleryList.addEventListener('click', handleImgClick);


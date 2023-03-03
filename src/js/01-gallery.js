import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

galleryItems.forEach(element => {
  let a = document.createElement('a');
  a.classList.add('gallery__item');
  a.href = element.original;
  gallery.append(a);

  let img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = element.preview;
  img.alt = element.description;
  a.append(img);
});

const options = {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
};
let InstanceGallery = new SimpleLightbox('.gallery a', options);

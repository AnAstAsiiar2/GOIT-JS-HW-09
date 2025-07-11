import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = Array.from({ length: 9 }, (_, i) => ({
  preview: new URL(`../img/im${i + 1}.jpg`, import.meta.url).href,
  original: new URL(`../img/im${i + 1}.jpg`, import.meta.url).href,
  description: `Зображення ${i + 1}`,
}));


const gallery = document.querySelector('.gallery');

const markup = images
  .map(
    ({ preview, original, description }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img class="gallery-image" src="${preview}" alt="${description}" />
    </a>
  </li>
`
  )
  .join('');

gallery.innerHTML = markup;

// Без captions
new SimpleLightbox('.gallery a');

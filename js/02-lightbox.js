import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

const gallery = createGalleryPhotos(galleryItems);
galleryContainer.innerHTML = gallery;

function createGalleryPhotos(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
                <a class="gallery__item" href="${original}">
		            <img class="gallery__image" src="${preview}" alt="${description}"/>
                </a>
            </li>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  scrollZoom: false,
  captionsData: "alt",
  captionDelay: 250,
});

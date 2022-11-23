import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const gallery = createGallery(galleryItems);

galleryContainer.innerHTML = gallery;
galleryContainer.addEventListener("click", clickOnGallery);

function clickOnGallery(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  console.log(e.target.nodeName);
  const instance = basicLightbox.create(
    `  <img src=${e.target.dataset.source} alt="Big Pictures"/>  `
  );
  instance.show();

  window.addEventListener("keydown", onEscapeButton);
}
function onEscapeButton(e) {
  if (e.key === "Escape") {
    instance.close();
  }
}

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
		    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
	      </a>
        </div>`;
    })
    .join("");
}

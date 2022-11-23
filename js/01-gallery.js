import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const gallery = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", gallery);
galleryContainer.addEventListener("click", clickOnGallery);

function clickOnGallery(e) {
  e.preventDefault();
  if (e.target.classList.contains(".gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `  <img src=${e.target.dataset.source} alt="Big Pictures"/>  `
  );
  instance.show();

  window.addEventListener("keydown", onEscapeButton);
}
function onEscapeButton(e) {
  if (e.code === "Escape") {
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

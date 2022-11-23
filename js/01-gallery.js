import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const gallery = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", gallery);
galleryContainer.addEventListener("click", clickOnGallery);

function clickOnGallery(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  console.log(e.target.nodeName);
  const instance = basicLight.create(
    `<img src="${e.target.dataset.sourse}" width = "800", height = "600">`
  );
  instance.show();
  galleryContainer.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
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

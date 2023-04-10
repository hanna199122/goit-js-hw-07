import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryConteiner = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
      <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`
  )
  .join("");

galleryConteiner.insertAdjacentHTML("afterbegin", markup);

let galleryLightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
console.log(markup);

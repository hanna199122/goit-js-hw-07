import { galleryItems } from "./gallery-items.js";

const galleryConteiner = document.querySelector(".gallery");

// console.log(galleryConteiner);

function createImagesGalleryMarkup(images) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join("");
}
const cardMarkup = createImagesGalleryMarkup(galleryItems);
galleryConteiner.insertAdjacentHTML("afterbegin", cardMarkup);
galleryConteiner.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();

  const isGalleryItemEl = evt.target.classList.contains("gallery__image");

  if (!isGalleryItemEl) {
    return;
  }
  //   console.log(evt.target);

  const sourseOriginal = evt.target.dataset.source;

  const instance = basicLightbox.create(`
      <img src="${sourseOriginal}" width="800" height="600"> 
  `);
  const isOpen = instance.show();
}

// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

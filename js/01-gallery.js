import { galleryItems } from "./gallery-items.js";
// Change code below this line
let originalImg = "/";
let itemList = "";


galleryItems.forEach(({ preview, original, description }) => {
  itemList += `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
});
document.querySelector(".gallery").innerHTML = itemList;

document.querySelector(".gallery").addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault()
//   originalImg = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`);
  instance.show()
  console.log(event.target.dataset.source);
});

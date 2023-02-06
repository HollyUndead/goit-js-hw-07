import { galleryItems } from "./gallery-items.js";
// Change code below this line

let itemList = "";

galleryItems.forEach(({ preview, original, description }) => {
  itemList += `<li class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    </li>`;
});
document.querySelector(".gallery").innerHTML = itemList;
function elemnetForCaptions() {
    return document.querySelectorAll('a.gallery_item')
}
document.querySelector(".gallery").addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();

  let lightbox = new SimpleLightbox('.gallery a', {
                                                    captionsData: 'alt', 
                                                    captionDelay: 250
                                                })
});

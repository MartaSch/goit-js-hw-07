import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line
const divGallery = document.querySelector(".gallery");
const markup = galleryItems.map((galleryItem) => `<div class = "gallery__item"><a class = "gallery__link" href = "${galleryItem.original}">
<img class = "gallery__image" src = "${galleryItem.preview}" data-source = "${galleryItem.original}" onclick = "return false"
alt = "${galleryItem.description}"/></a></div>`).join("");
divGallery.insertAdjacentHTML("beforeend", markup);

const galleryItem = document.querySelectorAll(".gallery__item");

divGallery.onclick = (e) => {
       const instance = basicLightbox.create(`
        <img width ="1400" height="900" src = "${e.target.dataset.source}">
        `).show()
        .instance.close()
    }







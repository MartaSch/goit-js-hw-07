import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line
const divGallery = document.querySelector(".gallery");
const markup = galleryItems.map((galleryItem) => `<a class = "gallery__link" href = "${galleryItem.original}">
<img class = "gallery__image" src = "${galleryItem.preview}" data-source = "${galleryItem.original}" onclick = "return false"
alt = "${galleryItem.description}"/></a>`).join("");
divGallery.insertAdjacentHTML("beforeend", markup);

const galleryImage = document.querySelector(".gallery__image");
const galleryLink = document.querySelectorAll(".gallery__link");

galleryLink.forEach(function (element) {
    element.onclick = (e) => {
       const instance = basicLightbox.create(`
        <img src = "${element.href}">
        `).show()
        .instance.close()
    }
})







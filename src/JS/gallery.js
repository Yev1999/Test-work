import { galleryItems } from "./galleryItems";

const gallery = document.querySelector(".galleryCreation");

const createGallery = (galleryItems) => {
  let create = galleryItems
    .map(({ picture }) => {
      return `<img src="${picture}" alt="quotes" class="gallery-img" />`;
    })
    .join("");

  gallery.insertAdjacentHTML("afterbegin", create);
};

createGallery(galleryItems);

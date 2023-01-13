import { galleryItems } from "./galleryItems";

const gallery = document.querySelector(".galleryCreation");
const galleryBtn = document.querySelector(".gallery-btn");

const createGallery = (galleryItems) => {
  let create = galleryItems
    .map(({ picture }) => {
      return `<img src="${picture}" alt="quotes" class="gallery-img" />`;
    })
    .join("");

  gallery.insertAdjacentHTML("afterbegin", create);
};

galleryBtn.addEventListener("click", () => {
  createGallery(galleryItems);
  galleryBtn.setAttribute("disabled", "");
});

createGallery(galleryItems);

import { professionCards } from "./professionCards";

const professionCart = document.querySelector(".profession-cart");

const createCart = (professionCards) => {
  let create = professionCards
    .map(({ name, position }) => {
      return `<h2 class="profession-name">${name}</h2>
    <p class="profession-work">${position}</p>`;
    })
    .join("");

  console.log(create);

  professionCart.insertAdjacentHTML("afterbegin", create);
};

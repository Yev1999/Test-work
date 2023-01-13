const home = document.querySelector(".home");
const about = document.querySelector(".about");
const expertise = document.querySelector(".expertise");
const teams = document.querySelector(".teams");
const works = document.querySelector(".works");
const people = document.querySelector(".people");
const contacts = document.querySelector(".contacts");
const crollToContacts = document.querySelector(".crollToContacts");

const ourStory = document.querySelector(".our-story");
const play = document.querySelector(".play");
const competence = document.querySelector(".competence");
const team = document.querySelector(".team");
const gallery = document.querySelector(".gallery");
const profession = document.querySelector(".profession");
const contact = document.querySelector(".contact");

home.addEventListener("click", (e) => {
  ourStory.scrollIntoView({
    block: "nearest",
    behavior: "smooth",
  });
});

about.addEventListener("click", (e) => {
  play.scrollIntoView({
    block: "center",
    behavior: "smooth",
  });
});

expertise.addEventListener("click", (e) => {
  competence.scrollIntoView({
    block: "center",
    behavior: "smooth",
  });
});

teams.addEventListener("click", (e) => {
  team.scrollIntoView({
    block: "center",
    behavior: "smooth",
  });
});

works.addEventListener("click", (e) => {
  gallery.scrollIntoView({
    block: "center",
    behavior: "smooth",
  });
});

people.addEventListener("click", (e) => {
  profession.scrollIntoView({
    block: "center",
    behavior: "smooth",
  });
});

contacts.addEventListener("click", (e) => {
  contact.scrollIntoView({
    block: "center",
    behavior: "smooth",
  });
});

const buttons = document.querySelectorAll(".header-link button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const sectionId = button.dataset.sectionId;
    const section = document.querySelector(`.${sectionId}`);
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
});

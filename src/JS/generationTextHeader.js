const headerText = document.querySelector(".header-text");
const headerPlusBtn = document.querySelector(".plusBtnHeader");
const headerMinusBtn = document.querySelector(".minusBtnHeader");
const hiddenText = document.querySelector(".header-text .pText");

headerPlusBtn.addEventListener("click", () => {
  hiddenText.classList.toggle("visually-hidden");
  headerPlusBtn.classList.replace("plusBtnHeader", "minusBtnHeader");
  headerMinusBtn.classList.replace("minusBtnHeader", "plusBtnHeader");
});

headerMinusBtn.addEventListener("click", () => {
  hiddenText.classList.toggle("visually-hidden");
  headerMinusBtn.classList.replace("plusBtnHeader", "minusBtnHeader");
  headerPlusBtn.classList.replace("minusBtnHeader", "plusBtnHeader");
});

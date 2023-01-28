const storyPlusBtn = document.querySelector(".plusBtnStory");
const storyMinusBtn = document.querySelector(".minusBtnStory");
const storyText = document.querySelector(".srory-texts");

storyPlusBtn.addEventListener("click", () => {
  storyText.classList.toggle("visually-hidden");
  storyPlusBtn.classList.replace("plusBtnStory", "minusBtnStory");
  storyMinusBtn.classList.replace("minusBtnStory", "plusBtnStory");
});

storyMinusBtn.addEventListener("click", () => {
  storyText.classList.toggle("visually-hidden");
  storyMinusBtn.classList.replace("plusBtnStory", "minusBtnStory");
  storyPlusBtn.classList.replace("minusBtnStory", "plusBtnStory");
});

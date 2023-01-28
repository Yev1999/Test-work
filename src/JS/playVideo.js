const buttonVideo = document.querySelector(".play-text-btn");
const playContent = document.querySelector(".play-content");

const addVideo = () => {
  let video = `<iframe
  width="100%"
  height="550px"
  src="https://www.youtube.com/embed/fJ0wJlOwAGI?start=15"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>`;

  playContent.insertAdjacentHTML("afterbegin", video);
};

buttonVideo.addEventListener("click", () => {
  addVideo();
  buttonVideo.classList.toggle("visually-hidden");
});

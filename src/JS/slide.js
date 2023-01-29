import { Splide } from "@splidejs/splide";
import { URLHash } from "@splidejs/splide-extension-url-hash";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

const splide = new Splide(".splide", {
  perPage: 5,
  perMove: 1,
  updateOnMove: true,
  type: "loop",
  height: "5rem",
  width: "23rem",
  focus: "center",
  padding: 0,
  gap: "1rem",
  snap: true,
  drag: "free",
});

splide.mount({ URLHash });

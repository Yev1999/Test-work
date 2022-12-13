import { Splide } from "@splidejs/splide";
import { URLHash } from "@splidejs/splide-extension-url-hash";
import "@splidejs/splide/src/css/template/default";

const splide = new Splide(".splide", {
  perPage: 5,
  perMove: 1,
  type: "loop",
  height: "3rem",
  width: "22rem",
  focus: "center",
  updateOnMove: true,
  padding: 1,
  // breakpoints: {
  //   600: {
  //     perPage: 2,
  //     height: "6rem",
  //   },
  // },
  drag: "free",
});

splide.mount({ URLHash });

import { Splide } from "@splidejs/splide";
import { URLHash } from "@splidejs/splide-extension-url-hash";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

// const splide = new Splide(".splideProfession", {
//   perPage: 5,
//   perMove: 1,
//   updateOnMove: true,
//   type: "loop",
//   height: "5rem",
//   width: "23rem",
//   focus: "center",
//   padding: 0,
//   gap: "1rem",
//   snap: true,
//   drag: "free",
// });

// splide.mount({ URLHash });

const splideText = new Splide("#header-slider", {
  pagination: true,
  perPage: 1,
  arrows: false,
});

splideText.mount();

const slideTeam = new Splide("#slide-person", {
  pagination: true,
  focus: "center",
  classes: {
    pagination: "splide__pagination person-class-pagination",
    page: "splide__pagination__page person-class-page",
  },
});

slideTeam.on("pagination:mounted", function (data) {
  // You can add your class to the UL element
  data.list.classList.add("splide__pagination--custom");

  // `items` contains all dot items
  data.items.forEach(function (item) {
    item.button.classList.add(`person-` + (item.page + 1));
  });
});

slideTeam.mount();

var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in r)return r[e].exports;if(e in t){var l=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,l.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){t[e]=r},e.parcelRequired7c6=l);var n=l("9kxo8");const o=document.querySelector(".galleryCreation"),i=document.querySelector(".gallery-btn"),a=e=>{let r=e.map((({picture:e})=>`<img src="${e}" alt="quotes" class="gallery-img" />`)).join("");o.insertAdjacentHTML("afterbegin",r)};i.addEventListener("click",(()=>{a(n.galleryItems),i.setAttribute("disabled","")})),a(n.galleryItems);
//# sourceMappingURL=index.c7cd5582.js.map

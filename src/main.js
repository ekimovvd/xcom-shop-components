import { createApp } from "vue";
import App from "./App.vue";
import VueSplide from "@splidejs/vue-splide";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

import "./assets/styles/styles.sass";
import "@splidejs/vue-splide/dist/css/splide.min.css";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";

// function getParam(obj, str) {
//     let value = undefined;

//     str.split(".").forEach((key) => {
//         value = value ? value[key] : obj[key];
//     });

//     return value;
// }

// console.log(getParam({ a: { b: 5 } }, "a.b"));
// // 5
// console.log(getParam({ a: { b: false } }, "a.b"));
// // false
// console.log(getParam({ a: { b: 5 } }, "a.b.c.d"));
// // undefined
// console.log(getParam({ a: { b: 5 } }, "a"));
// // { b : 5 }

// console.log(getParam({ a: { b: 5 }, c: 888, d: 999 }, "a.b.c.d"));

createApp(App)
    .use(VueSplide)
    .component("SiteSplide", Splide)
    .component("SiteSlide", SplideSlide)
    .mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import VueSplide from "@splidejs/vue-splide";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

import "./assets/styles/styles.sass";
import "@splidejs/vue-splide/dist/css/splide.min.css";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";

createApp(App)
    .use(VueSplide)
    .component("SiteSplide", Splide)
    .component("SiteSlide", SplideSlide)
    .mount("#app");

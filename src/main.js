import { createApp } from "vue";
import App from "./App.vue";
import VueSplide from "@splidejs/vue-splide";

import "./assets/styles/main.sass";
import "@splidejs/vue-splide/dist/css/splide.min.css";

createApp(App).use(VueSplide).mount("#app");

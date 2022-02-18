import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// base css
import "@/assets/base.css";
import "@/assets/tailwind.css";

// animate
import "animate.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

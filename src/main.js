import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import Vue3Toasity from "vue3-toastify";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import Skeleton from "primevue/skeleton";
import ProgressSpinner from "primevue/progressspinner";
import Image from 'primevue/image';
import Rating from 'primevue/rating';
import Button from 'primevue/button';

import "vue3-toastify/dist/index.css";
import '@/assets/styles.scss';
import "@/index.css";

const app = createApp(App);

app.use(createPinia());
app.use(Vue3Toasity);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.component("Skeleton", Skeleton);
app.component("ProgressSpinner", ProgressSpinner);
app.component("Image", Image);
app.component("Rating", Rating);
app.component("Button", Button);

app.mount("#app");

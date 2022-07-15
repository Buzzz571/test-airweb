import { createApp } from "vue";
import App from "./App.vue";
// import router
import customRouter from './router.js';
const app = createApp(App);
// router
app.use(customRouter);
app.mount("#app");
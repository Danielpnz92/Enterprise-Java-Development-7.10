// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";


const app = createApp(App).use(router);

const mountedApp = app.mount('#app');

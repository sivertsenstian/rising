import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "md-editor-v3/lib/style.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { VueFire } from "vuefire";

import App from "./App.vue";
import router from "./router";

const pinia = createPinia();

const vuetify = createVuetify({
    theme: {
        defaultTheme: "dark",
    },
    components,
    directives,
});

const app = createApp(App);
const firebaseApp = initializeApp({
    apiKey: "AIzaSyAk-x5gt3-8uWeyrJi44AJAc4fB7V3rLi0",
    authDomain: "rising-db.firebaseapp.com",
    projectId: "rising-db",
    storageBucket: "rising-db.firebasestorage.app",
    messagingSenderId: "108855446937",
    appId: "1:108855446937:web:f4850c9c0deaaf4a145708",
    measurementId: "G-71FTX7CEPD"
});

const analytics = getAnalytics(firebaseApp);

app.use(router);
app.use(vuetify);
app.use(pinia);
app.use(VueFire, {
    firebaseApp: firebaseApp,
});

app.mount("#app");

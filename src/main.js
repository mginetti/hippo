import Vue from "vue";
import App from "./App.vue";
import wb from "./registerServiceWorker";
import VueRouter from "vue-router";
import routes from "./routes.js";
import store from "./store.js";
import "./assets/style.scss";

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

Vue.prototype.$workbox = wb;
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");

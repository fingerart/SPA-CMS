require('./bootstrap');

import VueRouter from "vue-router"
import routes from "./routers.config"
import App from "./components/App.vue"

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: '/command',
    linkActiveClass: 'active',
    routes: routes
});

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
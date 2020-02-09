import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './app';
import routes from 'router';
import store from 'store';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
    store
});

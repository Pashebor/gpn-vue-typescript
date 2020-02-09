import Vue from 'vue';
import Vuex from 'vuex';

import Api from 'api';

import usersPosts from 'models/usersPosts';

const api = new Api();

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        usersPosts
    }
});

api.install(store);

export default store;
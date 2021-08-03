import {createApp, h, nextTick} from 'vue';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';


library.add(faUserSecret);

const Vue = {
    createApp: createApp,
    h: h,
    nextTick: nextTick
};

//const app_name = htmlWebpackPlugin.options.title;

//Vue.config.productionTip = false;

const app = Vue.createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);

app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'

app.mount('#app');

/*
new Vue({
    render: h => h(App),
});
*/
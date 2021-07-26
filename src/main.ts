import {createApp, h, nextTick} from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

const Vue = {
    createApp: createApp,
    h: h,
    nextTick: nextTick
};

//const app_name = htmlWebpackPlugin.options.title;

//Vue.config.productionTip = false;

const app = Vue.createApp(App);

app.use(router);

app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'

app.mount('#app');

/*
new Vue({
    render: h => h(App),
});
*/
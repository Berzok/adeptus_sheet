import {createApp, h, nextTick} from 'vue';
import App from './App.vue';
import router from './router';
import $ from 'jquery';

const Vue = {
    createApp: createApp,
    h: h,
    nextTick: nextTick
};

//const app_name = htmlWebpackPlugin.options.title;

//Vue.config.productionTip = false;

const app = Vue.createApp(App);

app.use(router);

app.mount('#app');

/*
new Vue({
    render: h => h(App),
});
*/
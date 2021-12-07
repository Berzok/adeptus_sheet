
import App from './App.vue';
import {createApp} from 'vue';
import axios from 'axios';
import Toast from 'vue-toastification';
import VueAxios from 'vue-axios';
import router from './router';
import './neutralino.js';
import configureHTTPInterceptor from './config/configureHTTPInterceptor';

import 'bootswatch/dist/darkly/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap';
// Import the notification CSS or use your own!
import 'vue-toastification/dist/index.css';

const toastOptions = {
    // You can set your default options here
    // see : https://www.npmjs.com/package/vue3-toast-single
};

configureHTTPInterceptor();

createApp(App)
    .use(Toast, toastOptions)
    .use(VueAxios, axios)
    .use(router)
    .mount('#app');

/*
new Vue({
    render: h => h(App),
});
*/
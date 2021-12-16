
import App from './App.vue';
import {createApp} from 'vue';
import axios from 'axios';
import Toast from 'vue-toastification';
import VueAxios from 'vue-axios';
import router from './router';
import PrimeVue from 'primevue/config';
import configureHTTPInterceptor from './config/configureHTTPInterceptor';
import { createPinia } from 'pinia';


//import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the notification CSS or use your own!
import 'vue-toastification/dist/index.css';
import 'primevue/resources/primevue.css';
import 'primevue/resources/themes/md-dark-deeppurple/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootswatch/dist/darkly/bootstrap.min.css';


const toastOptions = {
    // You can set your default options here
    // see : https://www.npmjs.com/package/vue3-toast-single
};

configureHTTPInterceptor();

createApp(App)
    .use(Toast, toastOptions)
    .use(VueAxios, axios)
    .use(router)
    .use(PrimeVue)
    .use(createPinia())
    .mount('#app');

/*
new Vue({
    render: h => h(App),
});
*/
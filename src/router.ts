import {createRouter, createWebHistory, RouterOptions, RouteRecordRaw} from 'vue-router';
import Overview from './components/Overview.vue';
import Accueil from './components/Accueil.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/overview',
        name: 'Overview',
        component: Overview, // without webpack code splitting
    },
    {
        path: '/',
        alias: '/accueil',
        name: 'Accueil',
        component: Accueil,
        // with webpack code splitting (best for larger apps, it can lazy load then):
        //component: () => import(/* webpackChunkName: "HelloWorld" */ './components/HelloWorld')
    },
];

const routerOptions = {
    history: createWebHistory(),
    routes,
}

const router = createRouter(routerOptions);

export default router;
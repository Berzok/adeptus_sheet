import {createRouter, createWebHistory, RouterOptions, RouteRecordRaw} from 'vue-router';
import Accueil from './components/Accueil.vue';
import Login from './components/Login.vue';
import Sidemenu from './components/Sidemenu.vue';
import Overview from './components/Overview.vue';
import AtoutsHandicaps from "./components/AtoutsHandicaps.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        alias: '/accueil',
        name: 'Accueil',
        component: Accueil,
        // with webpack code splitting (best for larger apps, it can lazy load then):
        //component: () => import(/* webpackChunkName: "HelloWorld" */ './components/HelloWorld')
    },
    {
        path: '/login',
        name: 'Login',
        component: Login, // without webpack code splitting
        // with webpack code splitting (best for larger apps, it can lazy load then):
        //component: () => import(/* webpackChunkName: "HelloWorld" */ './components/HelloWorld')
    },
    {
        path: '/overview',
        name: 'Overview',
        component: Overview, // without webpack code splitting
    },
    {
        path: '/atouts_handicaps',
        name: 'A_D',
        component: AtoutsHandicaps,
    },
];

routes.forEach((value => {
    value.meta = {
        transition: 'fade'
    }
}));

const routerOptions = {
    history: createWebHistory(),
    routes,
}

const router = createRouter(routerOptions);

export default router;
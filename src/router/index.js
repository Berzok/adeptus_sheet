import { createRouter, createWebHistory } from 'vue-router';
import Home from "./../components/Home";
import Login from "./../components/Login";
import Overview from "./../components/Overview";
import AtoutsHandicaps from "./../components/AtoutsHandicaps";
import Psychologie from "./../components/Psychologie";
export const LOGIN_PAGE_NAME = 'login';
export const HOME_PAGE_NAME = 'Home';

const routes = [
    {
        path: '/',
        alias: '/accueil',
        name: 'Home',
        component: Home,
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
    {
        path: '/psychologie',
        name: 'Psychologie',
        component: Psychologie,
    },
];

routes.forEach((value => {
    value.meta = {
        transition: 'fade'
    }
}));

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

router.beforeEach((to, from, next) => {
    // by defining in by negation (to.meta.requiresAuth !== false) every page wich is not explicitly
    // defining to be without authentication needs to be authentication (security concerns)

    /*
    if (to.matched.some((record) => record.meta.requiresAuth !== false)) {
        if (useUserStore().getters.isLogged) {
            next();
        }
        else {
            next({ name: LOGIN_PAGE_NAME });
        }
    }
    else {
        next();
    }
     */
    next();
});

export default router;
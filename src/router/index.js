import {createRouter, createWebHistory} from 'vue-router';
//import {useStore as useUserStore} from './../store/modules/user';
import {useStore} from './../store/personnage';
import Home from "./../components/Home";
import Overview from "./../components/Personnage/Overview";
import Competences from "./../components/Competences/Competences";
import Psychologie from "./../components/Personnage/Psychologie";
import Authenticate from "./../components/authenticate/Authenticate";
import Login from "./../components/authenticate/Login";

export const LOGIN_PAGE_NAME = 'login';
export const HOME_PAGE_NAME = 'Home';

const routes = [

    /*
    {
        path: '/',
        name: 'Home',
        component: Home,
        // with webpack code splitting (best for larger apps, it can lazy load then):
    },
     */
    {
        path: '/personnage',
        name: 'personnage',
        component: () => import('./../components/Personnage.vue'),
        children: [
            {
                path: 'overview',
                name: 'overview',
                component: Overview,
            },
            {
                path: 'details',
                name: 'details',
                component: () => import('./../components/Personnage/PersonnageDetails.vue'),
            },
        ],
    },
    {
        path: '/evangelion',
        name: 'evangelion'
    },
    {
        path: '/overview',
        name: 'Overview',
        component: Overview, // without webpack code splitting
    },
    {
        path: '/competences',
        name: 'Competences',
        component: Competences,
    },
    {
        path: '/psychologie',
        name: 'Psychologie',
        component: Psychologie,
    },
    {
        path: '/authenticate',
        name: 'authenticate',
        meta: {
            requiresAuth: false
        },
        component: Authenticate,
        children: [
            {
                path: 'login',
                name: 'login',
                meta: {
                    requiresAuth: false
                },
                component: Login,
            },
        ],
    },
    {
        path: '/login',
        redirect: {
            name: LOGIN_PAGE_NAME
        }
    }
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

router.beforeResolve((to, from, next) => {
    // by defining in by negation (to.meta.requiresAuth !== false) every page wich is not explicitly
    // defining to be without authentication needs to be authentication (security concerns)

    // ✅ This will work make sure the correct store is used for the
    // current running app
    const main = useStore();

    if (to.meta.requiresAuth !== false) {
        if (main.isLogged) {
            next();
        } else {
            console.dir(main.isLogged);
            next('login');
        }
    }
    next();
});

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; 

import AboutComponent from '../components/AboutComponent.vue';
import HomeComponent from '../components/HomeComponent.vue';
import ContactComponent from '../components/ContactComponent.vue';
import BlogComponent from '../components/BlogComponent.vue';
import RightSidebar from '../components/RightSidebar.vue';
import PostComponent from '../components/PostComponent.vue';
import DashboardComponent from '../components/DashboardComponent.vue';
import LoginComponent from '../components/LoginComponent.vue';
import SignupComponent from '../components/SignupComponent.vue';

const routes = [
    {
        path: '/',
        component: HomeComponent,
        name: 'home',
    },
    {
        path: '/about',
        component: AboutComponent,
        name: 'about',
    },
    {
        path: '/contact',
        component: ContactComponent,
        name: 'contact',
    },
    {
        path: '/blog',
        components: {
            default: BlogComponent,
            right: RightSidebar,
        },
        name: 'blog',
    },
    {
        path: '/blog/tags/:tag',
        components: {
            default: PostComponent,
            right: RightSidebar,
        },
        name: 'post',
    },
    {
        path: '/dashboard',
        component: DashboardComponent,
        name: 'dashboard',
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('isLoggin') != 1) {
                return next({ name: 'login' });
            }
            next();
        },
    },
    {
        path: '/login',
        component: LoginComponent,
        name: 'login',
    },
    {
        path: '/signUp',
        component: SignupComponent,
        name: 'signUp',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Start NProgress on route change start
router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});

// Stop NProgress on route change end
router.afterEach(() => {
    NProgress.done();
});

export default router;

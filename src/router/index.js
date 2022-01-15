import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/dashboard',
        name: 'Dashborad',
        component: () => import('../views/dashboard/dashboard.vue'),
        meta: { title: '首页', icon: 'ks-icon-other-home' }
    },
    {
        path: '/',
        redirect: '/dashboard'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;



import {createRouter, createWebHistory} from 'vue-router'


export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/pdf-app.vue'),
        },
        {
            path: '/theme-toggling',
            name: 'theme-toggling',
            component: () => import('@/views/theme-toggling.vue')
        },
        {
            path: '/sandbox',
            name: 'sandbox',
            component:  () => import('@/views/sandbox-view.vue')
        },
        {
            path: '/about',
            name: 'about',
            component:  () => import('@/components/about-view.vue')
        }
    ]
})

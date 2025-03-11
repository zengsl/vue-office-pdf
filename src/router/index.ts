/*
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
*/

import { createRouter, createWebHistory } from 'vue-router'
import PdfViewer from '@/views/pdf-app.vue'
import ThemeToggling from '@/views/theme-toggling.vue'
import About from '@/components/about-view.vue'
import Sandbox from '@/views/sandbox-view.vue'

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PdfViewer
    },
    {
      path: '/theme-toggling',
      name: 'theme-togglingh',
      component: ThemeToggling
    },
    {
      path: '/sandbox',
      name: 'sandbox',
      component: Sandbox
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

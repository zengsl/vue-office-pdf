import Layout from '@/views/cpn/Layout.vue'
import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/pdf-app.vue'),
    },
    {
      path: '/back-end-file',
      name: 'back-end-file',
      component: () => import('@/views/pdf-app2.vue'),
    },
    {
      path: '/theme-toggling',
      name: 'theme-toggling',
      component: () => import('@/views/theme-toggling.vue'),
    },
    {
      path: '/pdf-test-Dialog',
      name: 'pdf-test-Dialog',
      component: () => import('@/views/pdfDialogTest.vue'),
    },
    {
      path: '/sandbox',
      name: 'sandbox',
      component: () => import('@/views/sandbox-view.vue'),
    },
    {
      path: '/layout-type',
      name: 'layoutType',
      component: Layout,
      children: [
        {
          path: 'sample',
          name: 'layoutTypeSample',
          component: () => import('@/views/pdf-easy-sample.vue'),
        },
        {
          path: 'dialog',
          name: 'layoutTypeDialog',
          component: () => import('@/views/pdfDialogTest.vue'),
        },
      ],
    },
  ],
})

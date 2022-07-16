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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: () => import('../views/Buttons.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('../views/Cards.vue')
    },
    {
      path: '/tables',
      name: 'tables',
      component: () => import('../views/Tables.vue')
    },
  ]
})

export default router

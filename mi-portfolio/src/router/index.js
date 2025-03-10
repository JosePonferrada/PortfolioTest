import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/components/Projects.vue')
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('@/components/Skills.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/components/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
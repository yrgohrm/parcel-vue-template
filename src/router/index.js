import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

const router = createRouter({
  base: process.env.BASE_URL,
  history: createWebHashHistory(),
  routes,
})

export default router

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Gsap from '../views/Gsap.vue'
import Circle from '../views/gsap/CircleMove.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gsap',
    name: 'Gsap',
    component: Gsap,
    children: [
      {
        path: 'circle',
        component: Circle,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

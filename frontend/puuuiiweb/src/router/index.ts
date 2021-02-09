import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Gsap from '../views/Gsap.vue'
import Tutorial from '../views/gsap/Tutorial.vue'
import Atom from '../views/gsap/Atom.vue'
import Scroll from '../views/gsap/Scroll.vue'

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
        path: 'tutorial',
        component: Tutorial,
      },
      {
        path: 'atom',
        component: Atom,
      },
      {
        path: 'scroll',
        component: Scroll,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router

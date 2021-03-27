import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Gsap from '../views/Gsap.vue'
import Wasm from '../views/Wasm.vue'
import Tutorial from '../views/gsap/Tutorial.vue'
import Atom from '../views/gsap/Atom.vue'
import Scroll from '../views/gsap/Scroll.vue'
import Draggable from '../views/gsap/Draggable.vue'
import Pixi from '../views/gsap/Pixi.vue'
import Text from '../views/gsap/Text.vue'
import ScrollTo from '../views/gsap/ScrollTo.vue'
import Particle from '../views/gsap/Particle.vue'
import HighLow from '../views/wasm/HighLow.vue'

const routes: Array<RouteRecordRaw> = [
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
      {
        path: 'draggable',
        component: Draggable,
      },
      {
        path: 'pixi',
        component: Pixi,
      },
      {
        path: 'text',
        component: Text,
      },
      {
        path: 'scrollto',
        component: ScrollTo,
      },
      {
        path: 'particle',
        component: Particle,
      },
    ],
  },
  {
    path: '/wasm',
    name: 'Wasm',
    component: Wasm,
    children: [
      {
        path: 'highlow',
        component: HighLow,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router

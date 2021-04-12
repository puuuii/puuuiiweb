import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
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
import Css from '../views/gsap/css.vue'
import HighLow from '../views/wasm/HighLow.vue'
import Profile from '../views/Profile.vue'
import Skill from '../views/profile/Skill.vue'

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
      {
        path: 'css',
        component: Css,
      }
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
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    children: [
      {
        path: 'skill',
        component: Skill,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import Identification from './views/Identification.vue'
import Activities from './views/Activities.vue'
import Profile from './views/Profile.vue'
import Settings from './views/Settings.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/dashboard', component: Dashboard },
  { path: '/identification', component: Identification },
  { path: '/activities', component: Activities },
  { path: '/profile', component: Profile },
  { path: '/settings', component: Settings }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
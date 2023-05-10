import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import Identification from './views/Identification.vue'
import Activities from './views/Activities.vue'
import Live from './views/Live.vue'
import Profile from './views/Profile.vue'
import Settings from './views/Settings.vue'
import TimelineDetails from './views/Timeline-Details.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/dashboard', component: Dashboard },
  { path: '/identification', component: Identification },
  { path: '/activities', component: Activities },
  {path: '/live', component: Live},
  { path: '/profile', component: Profile },
  { path: '/settings', component: Settings },
  { path: '/timeline-details/:day', name: 'Timeline-details', component: TimelineDetails },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
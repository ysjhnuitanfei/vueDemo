const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
    path: '',
    name: 'interpolation',
    component: () => import('../views/interpolation/Index.vue')
  },
  {
    path: '/cycle',
    name: 'cycle',
    component: () => import('../views/cycle/Index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
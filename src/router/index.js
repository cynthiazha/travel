import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: () => import('@/pages/city/city')
  }, {
    path: '/detail/:id',
    name: 'Deatil',
    component: () => import('@/pages/detail/detail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router

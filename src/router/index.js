import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import Detail from '../components/detail/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router

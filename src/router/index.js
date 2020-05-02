import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import Detail from '../components/detail/Detail'
import Login from '../components/login/Login'
import LoginC from '../components/login/LoginC'
import Register from '../components/login/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/main',
    component: Main
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/login',
    component: Login,
    children: [
      {
        path: '/userLogin',
        component: LoginC
      },
      {
        path: '/userRegister',
        component: Register
      },
      {
        path: '/',
        component: LoginC
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/userRegister' || to.path === '/login' || to.path === '/userLogin') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
// to 将要访问的路径
// from 代表从哪个路径跳转而来
// next 是一个函数，表示放行
// next() 放行 next('/login') 强制跳转

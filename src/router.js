import Vue from 'vue'
import Router from 'vue-router'
import ga from 'vue-ga'
import Calculator from '@/components/Calculator'
import Settings from '@/components/Settings'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Calculator',
      component: Calculator
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})

if (process.env.NODE_ENV === 'production') {
  ga(router, 'UA-98318965-1')
}

export default router

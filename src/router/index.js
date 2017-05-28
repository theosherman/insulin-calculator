import Vue from 'vue'
import Router from 'vue-router'
import ga from 'vue-ga'
import Calculator from '@/components/Calculator'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Calculator',
      component: Calculator
    }
  ]
})

if (process.env.NODE_ENV === 'production') {
  ga(router, 'UA-98318965-1')
}

export default router

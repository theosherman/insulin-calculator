import Vue from 'vue'
import Router from 'vue-router'
import ga from 'vue-ga'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Calculator',
      component: require('@/components/Calculator')
    },
    {
      path: '/settings',
      name: 'Settings',
      component: require('@/components/Settings')
    },
    {
      path: '/help',
      name: 'Help',
      component: require('@/components/Help')
    },
    {
      path: '/agreement',
      name: 'Agreement',
      component: require('@/components/Agreement')
    }
  ]
})

if (process.env.NODE_ENV === 'production') {
  ga(router, 'UA-98318965-1')
}

export default router

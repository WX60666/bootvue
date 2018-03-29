import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '@/modules/home/home'
import mall from '@/modules/mall/mall'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/mall',
      name: 'mall',
      component: mall,
    }
  ]
})

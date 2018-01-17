import Vue from 'vue'
import Router from 'vue-router'
import index from '@/compoments/index'
import tableCellComponent from '@/compoments/tableCell'
import login from '@/compoments/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/tables',
      name: 'tables',
      component: tableCellComponent
    }
  ]
})

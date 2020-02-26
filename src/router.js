import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import ('./views/Dashboard.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import ('./views/Projects.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import ('./views/Team.vue')
    }

  ]
})

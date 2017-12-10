import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/pages/Search'
import Pokemon from '@/pages/Pokemon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Search
    },
    {
      path: '/pokemon/:id',
      name: 'Pokemon',
      component: Pokemon
    }
  ]
})

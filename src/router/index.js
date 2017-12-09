import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Pokemon from '@/pages/Pokemon'
import Types from '@/pages/Types'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pokemon/:id',
      component: 'Pokemon'
    },
    {
      path: '/pokemontypes',
      name: 'Pokemon Types',
      component: Types
    }
  ]
})
